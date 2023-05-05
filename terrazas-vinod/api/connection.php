<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$serverName="localhost";
$username="root";
$password="password";
$dbName="terrazas";
// $username="lxs0671_market";
// $password="Esc0l@r21";
// $dbName="lxs0671_escolar";
$conn=mysqli_connect($serverName, $username, $password, $dbName) or die("Unable to connect");

// echo "connection success";
?>