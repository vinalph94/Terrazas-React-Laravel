<?php
session_start();
require 'connection.php';



$EncodedData = file_get_contents('php://input');
$DecodeData = json_decode($EncodedData,true);


$recEmail= $_POST['emailId']; 
$recPassword= $_POST['password'];
$recPhone= $_POST['phone'];
$recLastName = $_POST['lastName'];
if(isset($_POST['fName'])){
    $recFirstName = $_POST['fName'];    
}else{
        $recFirstName = "Vinod";
}
$token = bin2hex(openssl_random_pseudo_bytes(32));
$recRole = '1';

// function isUnique($recEmail){
//     $query = "select * from user where email='$recEmail'";
//     //global $db;
    
//     //$result = $db->query($query);
//     $result = query($query);
    
//     if($result->num_rows > 0){
//         return false;
//     }
//     else return true;
    
// }

//if(isset($_POST['firstName'])){    }

$query="INSERT INTO `user` (`emailId`, `password`, `phone`, `role`, `firstName`, `lastName`) VALUES ( '$recEmail', '$recPassword', '$recPhone', '$recRole', '$recFirstName', '$recLastName')";

$Result= mysqli_query($conn,$query);

if($Result){
    $Message ="User has been registered successfully. Please verify your email";
   // $db->query($query);
    // $message = "Hi $recLastName! Account successfully created here is the activation link http://localhost/api/activate.php?token=$token";
    
    // mail($email , 'Activate Account' , $message , 'From: vinalph94@yahoo.com');
    // header("Location:index.php?success=" . urlencode("Activation Email Sent!"));
    // exit();

}else{
    $Message ="Error during registration.. Please try again";
}

$Response[] = array("Message"=>$Message);
echo json_encode($Response);

?>