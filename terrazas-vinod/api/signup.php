<?php
session_start();
require 'connection.php';

// Include the PHPMailer classes
require_once 'PHPMailer.php';
require_once 'SMTP.php';
require_once 'Exception.php';
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Log incoming POST requests to a file
file_put_contents('C:\Users\vinod\Desktop\PHPLogs\file5.log', print_r($_POST, true), FILE_APPEND);

// Output incoming POST requests to the console
error_log(print_r($_POST, true));
// Create a new PHPMailer object
//$mail = new PHPMailer\PHPMailer\PHPMailer();

//$mail->CharSet = 'UTF-8';

//$mail->Host       = "smtp.gmail.com"; // SMTP server example
//$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
//$mail->SMTPAuth   = true;                  // enable SMTP authentication
//$mail->Port       = 25;                    // set the SMTP port for the GMAIL server
//$mail->Username   = "alphandre94@gmail.com";//"anyalav26@gmail.com"; // SMTP account username example
//$mail->Password   = "lasjowfrqicdcabg";//"admin1234";

//$requestBody = file_get_contents('php://input');
//$data = json_decode($requestBody, true);

//print_r($data);
//print_r($data->name);
//print_r($data->email);
// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//     // Print the incoming POST data
//     print_r($_POST);
//     print_r($_POST['name']);
// }

$data = json_decode(file_get_contents('php://input'), true);
$password = null;
$email= null;
$phone = null;
$name = null;

if (isset($data['name'])) {
    $name = $data['name'];

}
if (isset($data['email'])) {
    $email = $data['email'];
}
if (isset($data['phone'])) {
    $phone = $data['phone'];
}
if (isset($data['password'])) {
    $password = md5($data['password']);
}




$email_verification_code = rand(100000, 999999);

$phone_verification_code = rand(100000, 999999);


// Hash password
$password_hashed = $password;



// Check if email already exists
$stmt = $conn->prepare('SELECT * FROM users WHERE email = ?');
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo json_encode(['error' => 'Email already exists']);
    exit();
}

// Check if phone already exists
$stmt = $conn->prepare('SELECT * FROM users WHERE phone = ?');
$stmt->bind_param('s', $phone);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo json_encode(['error' => 'Phone already exists']);
    exit();
}

// Insert user into database
if (!empty($name)) {
    print_r('entering into db');
    $stmt = $conn->prepare('INSERT INTO users (name, email, phone, password_hashed, email_verification_code, phone_verification_code) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->bind_param('ssssii', $name, $email, $phone, $password_hashed, $email_verification_code, $phone_verification_code);
    $stmt->execute();
} else {
    print_r('fail entering into db');
    //echo json_encode(['error' => 'no name cannot insert into database']);
}


// Send email verification code
//$to = 'vinalph94@yahoo.com';//$email;
//$subject = 'Email verification code';
//$message = "Your email verification code is: 007";//$email_verification_code";
//$headers = "From: alphandre94@gmail.com\r\n";
//$headers .= "Reply-To: alphandre94@gmail.com\r\n";
//$headers .= "CC: alphandre94@gmail.com\r\n";
//$headers .= "BCC: vinod.alphonse@yahoo.com\r\n";
//$headers .= "MIME-Version: 1.0\r\n";
//$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
//$headers .= 'SMTPSecure: tls' . "\r\n";
//$headers .= 'SMTPAuth: true' . "\r\n";
//$headers .= 'Username: alphandre94@gmail.com' . "\r\n";
//$headers .= 'Password: lasjowfrqicdcabg' . "\r\n";

//mail($to, $subject, $message, );//$headers);
//ini_set('SMTP', 'vinalph94@yahoo.com');
//ini_set('smtp_port', 587);

// Set the SMTP credentials and server details
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'alphandre94@gmail.com';
$mail->Password = 'lasjowfrqicdcabg';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Set the email message details
$mail->setFrom('alphandre94@gmail.com', 'Terrazas');
$mail->addAddress($email, $name);
$mail->Subject = 'Email verification code';
$mail->Body = 'Your email verification code is: '. $email_verification_code;

// Send the email and check for errors
if ($mail->send()) {
    echo 'Email sent successfully!';
} else {
    echo 'Error: ' . $mail->ErrorInfo;
}

// Store phone verification code in session
$_SESSION['phone_verification_code'] = $phone_verification_code;
$_SESSION['phone'] = $phone;

echo json_encode([]);
?>