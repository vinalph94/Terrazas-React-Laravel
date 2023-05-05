<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once("ResidentCRUD.php");

$residentId = -1;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    echo "only POST allowed";
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data["username"];
    $password = md5($data["password"]);

    $residentCrud = new ResidentCRUD();

    $result = $residentCrud->login($email, $password);


    if (!is_string($result)) {
        echo "{\"success\":true,\"id\":" . $result["id"] . ",\"role\":\"".$result["role"]."\",\"name\":\"".$result["name"]."\",\"email\":\"".$result["email"]."\",\"phone\":\"".$result["phone"]."\"}";

    } else {
        echo "{\"success\":false,\"msg\":\"" . $result . "\"}";

    }

}