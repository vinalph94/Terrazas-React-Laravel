<?php
require_once '../DatabaseConnection.php';
$db = new DatabaseConnection();
$conn = $db->getConnection();
// retrieve data from POST request
$garden_id = $_POST['garden_id'];

// delete data from database
$sql = "DELETE FROM garden_timing WHERE garden_id='$garden_id'";
$result = $conn->query($sql);

if ($result) {
    echo "Record deleted successfully";
} else {
    echo "Error: ";
}
?>