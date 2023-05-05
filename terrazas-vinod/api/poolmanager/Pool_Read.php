<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");
require_once '../DatabaseConnection.php';

$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from database
$query = "SELECT pool_id, day, TIME_FORMAT(start_time, '%H:%i') AS start_time, TIME_FORMAT(end_time, '%H:%i') AS end_time FROM pool_timing";
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