<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once '../DatabaseConnection.php';
$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from POST request
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];



$sql = "UPDATE pool_Access SET decision='accept' WHERE membership_id_r='$id'";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'error' => mysqli_error($conn)));
}

mysqli_close($conn);
?>