<?php
// Include the PHPMailer classes
require_once 'PHPMailer.php';
require_once 'SMTP.php';
require_once 'Exception.php';

// Create a new PHPMailer object
$mail = new PHPMailer\PHPMailer\PHPMailer();

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
$mail->addAddress('alphandre94@gmail.com', 'Vinod');
$mail->Subject = 'Test Email';
$mail->Body = 'This is a test email from PHPMailer.';

// Send the email and check for errors
if ($mail->send()) {
   echo 'Email sent successfully!';
} else {
   echo 'Error: ' . $mail->ErrorInfo;
}
?>
