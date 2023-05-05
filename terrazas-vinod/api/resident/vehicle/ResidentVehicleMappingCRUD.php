<?php

// CREATE TABLE Resident_vehicle_mapping (
//     id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     resident_id INT(11) UNSIGNED NOT NULL,
//     vehicle_make VARCHAR(255) NOT NULL,
//     vehicle_model VARCHAR(255) NOT NULL,
//     vehicle_color VARCHAR(255) NOT NULL,
//     license_plate_number VARCHAR(20) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (resident_id) REFERENCES resident(id) ON DELETE CASCADE
// );



require_once '../../DatabaseConnection.php';

class ResidentVehicleMappingCRUD
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
    function createMapping($residentId, $vehicleMake, $vehicleModel, $vehicleColor, $licensePlateNumber)
    {
        $stmt = $this->conn->prepare("INSERT INTO Resident_vehicle_mapping (resident_id, vehicle_make, vehicle_model, vehicle_color, license_plate_number) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("issss", $residentId, $vehicleMake, $vehicleModel, $vehicleColor, $licensePlateNumber);
        $stmt->execute();
        return $stmt->insert_id;
    }

    // READ operation - Get all mappings
    function getAllMappings($resident_id)
    {
        $stmt = $this->conn->prepare("SELECT * FROM Resident_vehicle_mapping where resident_id= ? ");
        $stmt->bind_param("i", $resident_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    // READ operation - Get mapping by ID
    function getMappingById($id)
    {
        $stmt = $this->conn->prepare("SELECT * FROM Resident_vehicle_mapping WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }

    // UPDATE operation
    function updateMapping($id, $residentId, $vehicleMake, $vehicleModel, $vehicleColor, $licensePlateNumber)
    {
        $stmt = $this->conn->prepare("UPDATE Resident_vehicle_mapping SET resident_id = ?, vehicle_make = ?, vehicle_model = ?, vehicle_color = ?, license_plate_number = ? WHERE id = ?");
        $stmt->bind_param("issssi", $residentId, $vehicleMake, $vehicleModel, $vehicleColor, $licensePlateNumber, $id);
        $stmt->execute();
        return $stmt->affected_rows;
    }

    // DELETE operation
    function deleteMapping($id)
    {
        $stmt = $this->conn->prepare("DELETE FROM Resident_vehicle_mapping WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->affected_rows;
    }
}

// // Usage example:
// $residentVehicleMappingCRUD = new ResidentVehicleMappingCRUD();

// // CREATE operation
// $newMappingId = $residentVehicleMappingCRUD->createMapping(1, 'Ford', 'Mustang', 'Red', 'ABC123');

// // READ operation - Get all mappings
// $allMappings = $residentVehicleMappingCRUD->getAllMappings();

// // READ operation - Get mapping by ID
// $mappingById = $residentVehicleMappingCRUD->getMappingById(1);

// // UPDATE operation
// $updatedRows = $residentVehicleMappingCRUD->updateMapping(1, 1, 'Ford', 'Mustang', 'Blue', 'DEF456');

// // DELETE operation
// $deletedRows = $residentVehicleMappingCRUD->deleteMapping(1);