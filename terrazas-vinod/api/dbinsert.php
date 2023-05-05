<?php
require 'connection.php';

$name = "Vinod Alphonse";
$email = "alphandre94@gmail.com";
$phone = "6823443470";
$password = "Testuser1234#";

$email_verification_code = rand(100000, 999999);

$phone_verification_code = rand(100000, 999999);


// Hash password
$password_hashed = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare('INSERT INTO users (name, email, phone, password_hashed, email_verification_code, phone_verification_code) VALUES (?, ?, ?, ?, ?, ?)');
$stmt->bind_param('ssssii',$name, $email, $phone, $password_hashed, $email_verification_code, $phone_verification_code);
$stmt->execute();

echo 'Inserted';

?>