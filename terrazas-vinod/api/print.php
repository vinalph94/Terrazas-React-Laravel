<?php
require 'connection.php';

file_put_contents('C:\Users\vinod\Desktop\PHPLogs\file4.log', print_r($_POST, true), FILE_APPEND);
error_log(print_r($_POST, true));
print_r($_POST);

if(isset($array['Name'])){
    $name = $_POST['Name'];
}
if(isset($array['Email'])){
$email = $_POST['Email'];
}
if(isset($array['Phone'])){
$phone = $_POST['Phone'];
}
if(isset($array['Password'])){
$password = $_POST['Password'];
}

$email_verification_code = rand(100000, 999999);

$phone_verification_code = rand(100000, 999999);


// Hash password
$password_hashed = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare('INSERT INTO users (name, email, phone, password_hashed, email_verification_code, phone_verification_code) VALUES (?, ?, ?, ?, ?, ?)');
$stmt->bind_param('ssssii', $name, $email, $phone, $password_hashed, $email_verification_code, $phone_verification_code);
$stmt->execute();

//header("Content-Type: application/json");
//header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers: Content-Type");
//header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Headers: Content-Type");

file_put_contents('C:\Users\vinod\Desktop\PHPLogs\file3.log', print_r($_POST, true), FILE_APPEND);
//ini_set("error_log", "C:\Users\vinod\Desktop\PHPLogs\file3.log");





// Output incoming POST requests to the console
//error_log(print_r($_POST, true));




?>