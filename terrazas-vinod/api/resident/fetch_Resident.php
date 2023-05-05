<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once '../DatabaseConnection.php';

$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from database
$query = "SELECT * from users where  role ='resident' ";
$result = $conn->query($query);

    // Check for errors
    if (!$result) {
        echo "Error: " . $mysqli->error;
        return;
    }
// convert data to an associative array
$rows = array();
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

// return data as JSON
header('Content-Type: application/json');
echo json_encode($rows);
?>