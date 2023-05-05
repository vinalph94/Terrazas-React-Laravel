<?php
include_once('VisitorCRUD.php');

// Create a new instance of the VisitorCRUD class
$visitorCrud = new VisitorCRUD('localhost', 'username', 'password', 'database_name');

// Get ID from URL parameter
$id = $_GET['id'];

// Call the readVisitor function with ID (if provided)
$visitors = $visitorCrud->readVisitor($id);

// Output the result as JSON
echo json_encode($visitors);

// Close MySQLi connection
$visitorCrud->closeConnection();
?>
