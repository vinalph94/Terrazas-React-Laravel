<?php


require_once 'DatabaseConnection.php';

class ResidentCRUD
{
    private $conn;

    function __construct()
    {
        $db = new DatabaseConnection();
        $this->conn = $db->getConnection();
    }

    function __destruct()
    {
        $this->conn->close();
    }

    // CREATE operation
    function createResident($name, $phone_number, $email, $password, $property_id = null)
    {
        $stmt = $this->conn->prepare("INSERT INTO resident (name,  phone_number,email, password, property_id) VALUES (?, ?, ?,?,?)");
        $stmt->bind_param("ssssi", $name, $phone_number, $email, $password, $property_id);
        try {
            $result = $stmt->execute();
            if ($result) {
                return $stmt->insert_id;
            } else {
                return "Unable to create resident.";
            }

        } catch (Exception $e) {
            return $e->getMessage();
        }

    }

    function login($email, $password)
    {

        $stmt = $this->conn->prepare("SELECT * FROM users WHERE email = ? and password_hashed = ? and email_verified = 1");
        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows == 1) {
            // authentication succeeded, return success message
            $obj = [
                "id" => "bar",
                "role" => "foo",
            ];
            $data = $result->fetch_assoc();
            $obj["id"] = $data["id"];
            $obj["role"] = $data["role"];
            $obj["name"]= $data["name"];
            $obj["phone"]= $data["phone"];
            $obj["email"]= $data["email"];
            return $obj;

        } else {
            // authentication failed, return error message
            return "Authentication Failed " . $password;
        }

    }

    // READ operation - Get all residents
    function getAllResidents()
    {
        $stmt = $this->conn->prepare("SELECT * FROM resident");
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    // READ operation - Get resident by ID
    function getResidentByPropertyId($id)
    {
        $stmt = $this->conn->prepare("SELECT * FROM resident WHERE property_id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }

    // UPDATE operation
    function updateResident($id, $name, $phone_number, $email, $password, $property_id)
    {
        $stmt = $this->conn->prepare("UPDATE resident SET name = ?, date_of_birth = ?, address = ?, occupation = ? , phone_number= ?,email = ?,password = ?, property_id = ? WHERE id = ?");
        $stmt->bind_param("ssssii", $name, $phone_number, $email, $password, $property_id, $id);
        $stmt->execute();
        return $stmt->affected_rows;
    }

    // DELETE operation
    function deleteResident($id)
    {
        $stmt = $this->conn->prepare("DELETE FROM resident WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->affected_rows;
    }
}

// // Usage example:
// $residentCrud = new ResidentCRUD();

// // CREATE operation
// $newResidentId = $residentCrud->createResident('John Doe', '1990-01-01', '123 Main St');

// // READ operation - Get all residents
// $allResidents = $residentCrud->getAllResidents();

// // READ operation - Get resident by ID
// $residentById = $residentCrud->getResidentByPropertyId(1);

// // UPDATE operation
// $updatedRows = $residentCrud->updateResident(1, 'John Doe', '1990-01-02', '123 Main St', 'Programmer');

// // DELETE operation
// $deletedRows = $residentCrud->deleteResident(1);