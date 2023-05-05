<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");
require_once '../DatabaseConnection.php';

$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from database
$filter = $_GET['filter'] ?? '';




$query = "SELECT * from allevent where event_id in (SELECT event_id from eventregistration where resident_id = $filter)";
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