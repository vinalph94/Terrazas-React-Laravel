<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once("ResidentVehicleMappingCRUD.php");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if (!isset($_GET["id"])) {
        echo "{\"success\":\"false\",\"msg\":\"id not provided\"}";
        return;
    }

    $vehicle_id = $_GET["id"];
    $residentVehicleMappingCRUD = new ResidentVehicleMappingCRUD();

    // READ operation - Get all mappings

    $result = $residentVehicleMappingCRUD->deleteMapping($vehicle_id);
    if (is_numeric($result) && $result==1) {
        echo "{\"success\":\"true\"}";

    } else {
        echo "{\"success\":\"false\",\"msg\":\"" . "Could not delete / no record found" . "\"}";

    }

} else {
    echo "ONLY GET ALLOWED";
}