<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
include_once('VisitorCRUD.php');

// Create a new instance of the VisitorCRUD class
$visitorCrud = new VisitorCRUD('localhost', 'username', 'password', 'database_name');

// Get form data
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$email = $data["email"];
// Call the updateVisitor function with form data
if ($visitorCrud->updateVisitor($id)) {
    echo "Visitor updated successfully.";


    try {
        $msg = "Congratulations, your request is approved";

        // use wordwrap() if lines are longer than 70 characters
            $msg = wordwrap($msg,70);
        
        // send email
            mail($email,"Terrazas- visitor",$msg);
    }
      
      //catch exception
      catch(Exception $e) {
        
      }


} else {
    echo "Error updating visitor.";
}

// Close MySQLi connection
$visitorCrud->closeConnection();
?>
