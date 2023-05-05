<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once '../DatabaseConnection.php';

$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from POST request
$data = json_decode(file_get_contents("php://input"), true);

// Prepare SQL statement to insert data into table
$stmt = $conn->prepare("INSERT INTO pool_timing (pool_id, day, start_time, end_time) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $data['pool_id'], $data['day'], $data['start_time'], $data['end_time']);

// Execute SQL statement
if ($stmt->execute()) {
  echo "Data inserted successfully";
} else {
  echo "Error inserting data: " . $conn->error;
}

// Close statement and database connection
$stmt->close();
?>