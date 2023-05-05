<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once '../DatabaseConnection.php';
$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from POST request
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['resident_id'];

// delete data from database
$sql = "DELETE FROM garden_Access WHERE resident_id=".$id;
$result = $conn->query($sql);

if ($result) {
    echo "Record deleted successfully";
} else {
    echo "Error: ";
}
?>