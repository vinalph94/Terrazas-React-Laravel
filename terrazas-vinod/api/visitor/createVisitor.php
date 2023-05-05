
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include_once('VisitorCRUD.php');

// Create a new instance of the VisitorCRUD class
$visitorCrud = new VisitorCRUD('localhost', 'root', 'password', 'terrazas');

// Get form data
$VisitorName=$_POST['VisitorName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$CarPlateNumber = $_POST['CarPlateNumber'];
$Vehicle= $_POST['Vehicle'];
$TimeDate= $_POST['TimeDate'];
$ApartmentNo= $_POST['ApartmentNo'];


// Call the createVisitor function with form data
if ($visitorCrud->createVisitor($VisitorName, $email, $phone, $CarPlateNumber, $Vehicle,$TimeDate,$ApartmentNo)) {
    echo "We'll consider your request- Terrazas";
} else {
    echo "Error creating visitor.";
}

// Close MySQLi connection
$visitorCrud->closeConnection();
?>
