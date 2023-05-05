<?php
session_start();
require 'connection.php';

if (isset($_GET['verify_email'])) {
  $email_verification_code = $_GET['verify_email'];

  // Check if email verification code is valid
  $stmt = $conn->prepare('SELECT * FROM users WHERE email_verification_code = ?');
  $stmt->bind_param('i', $email_verification_code);
  $stmt->execute();
  $result = $stmt->get_result();
  if ($result->num_rows == 0) {
    echo json_encode(['error' => 'Invalid email verification code']);
    exit();
  }

  // Update email verification status
  $stmt = $conn->prepare('UPDATE users SET email_verified = 1 WHERE email_verification_code = ?');
  $stmt->bind_param('i', $email_verification_code);
  $stmt->execute();

  echo json_encode([]);
} elseif (isset($_GET['verify_phone'])) {
  $phone_verification_code = $_GET['verify_phone'];

  // Check if phone verification code is valid
  if ($_SESSION['phone_verification_code'] != $phone_verification_code) {
    echo json_encode(['error' => 'Invalid phone verification code']);
    exit();
  }

  // Update phone verification status
  $stmt = $conn->prepare('UPDATE users SET phone_verified = 1 WHERE phone = ?');
$stmt->bind_param('s', $_SESSION['phone']);
$stmt->execute();

echo json_encode([]);
}
?>