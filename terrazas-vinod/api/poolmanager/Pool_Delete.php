<?php
require_once '../DatabaseConnection.php';
$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from POST request
$pool_id = $_POST['pool_id'];

// delete data from database
$sql = "DELETE FROM pool_timing WHERE pool_id='$pool_id'";
$result = $conn->query($sql);

if ($result) {
    echo "Record deleted successfully";
} else {
    echo "Error: ";
}
?>