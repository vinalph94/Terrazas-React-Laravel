<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once '../DatabaseConnection.php';
$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from POST request
$data = json_decode(file_get_contents("php://input"), true);

// set the parameter values
$day = $data['day'];
$start_time = $data['start_time'];
$end_time = $data['end_time'];
$pool_id = $data['pool_id'];

$sql = "UPDATE pool_timing SET day='$day', start_time='$start_time', end_time='$end_time' WHERE pool_id='$pool_id'";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'error' => mysqli_error($conn)));
}

mysqli_close($conn);
?>