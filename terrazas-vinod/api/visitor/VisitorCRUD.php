<?php

require("../DatabaseConnection.php");
class VisitorCRUD
{
    private $conn; // MySQLi connection object

    // Constructor
    public function __construct($host, $username, $password, $dbname)
    {
        $db = new DatabaseConnection();
        $this->conn = $db->getConnection();
        // Create a MySQLi connection

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // Create a new visitor
    public function createVisitor($VisitorName, $email, $phone, $CarPlateNumber, $Vehicle,$TimeDate,$ApartmentNo)
    {
        $stmt = $this->conn->prepare("INSERT INTO visitor (VisitorName, email, phone, CarPlateNumber, Vehicle,TimeDate,ApartmentNo) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $VisitorName, $email, $phone, $CarPlateNumber, $Vehicle,$TimeDate,$ApartmentNo);
        if ($stmt->execute()) {
        
            
        
            return true;
        } else {
            return false;
        }
    }

    // Read visitor(s)
    public function readVisitor($id = null)
    {
        if ($id === null) {
            $stmt = $this->conn->prepare("SELECT * FROM Visitor");
        } else {
            $stmt = $this->conn->prepare("SELECT * FROM Visitor WHERE ID = ?");
            $stmt->bind_param("i", $id);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $visitors = array();
        while ($row = $result->fetch_assoc()) {
            $visitors[] = $row;
        }
        return $visitors;
    }

    // Update a visitor
    public function updateVisitor($id)
    {
        $stmt = $this->conn->prepare("UPDATE Visitor SET approved = 1 WHERE ID = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    // Delete a visitor
    public function deleteVisitor($id)
    {
        $stmt = $this->conn->prepare("DELETE FROM Visitor WHERE ID = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    // Close MySQLi connection
    public function closeConnection()
    {
        $this->conn->close();
    }
}

?>
