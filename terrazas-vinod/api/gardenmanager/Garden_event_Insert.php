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
$stmt = $conn->prepare("INSERT INTO AllEvent (event_name, event_Description, event_date, image,place) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $data['event_name'], $data['event_Description'], $data['event_date'], $data['image'],$data['place']);

// Execute SQL statement
if ($stmt->execute()) {
  echo "Data inserted successfully";
} else {
  echo "Error inserting data: " . $conn->error;
}

// Close statement and database connection
$stmt->close();
?>