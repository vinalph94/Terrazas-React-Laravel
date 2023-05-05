<?php
include_once('VisitorCRUD.php');

// Create a new instance of the VisitorCRUD class
$visitorCrud = new VisitorCRUD('localhost', 'username', 'password', 'database_name');

// Get ID from URL parameter
$id = $_GET['id'];

// Call the deleteVisitor function with ID
if ($visitorCrud->deleteVisitor($id)) {
    echo "Visitor deleted successfully.";
} else {
    echo "Error deleting visitor.";
}

// Close MySQLi connection
$visitorCrud->closeConnection();
?>
