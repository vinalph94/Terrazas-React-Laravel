<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once("ResidentVehicleMappingCRUD.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data["resident_id"])) {
        echo "{\"success\":false,\"msg\":\"resident_id not provided\"}";
        return;
    }

    if (!isset($data["vehicle_make"])) {
        echo "{\"success\":false,\"msg\":\"vehicle_make not provided\"}";
        return;
    }
    if (!isset($data["vehicle_model"])) {
        echo "{\"success\":false,\"msg\":\"vehicle_model not provided\"}";
        return;
    }
    if (!isset($data["vehicle_color"])) {
        echo "{\"success\":false,\"msg\":\"vehicle_color not provided\"}";
        return;
    }
    if (!isset($data["license_plate_number"])) {
        echo "{\"success\":false,\"msg\":\"license_plate_number not provided\"}";
        return;
    }

    $residentVehicleMappingCRUD = new ResidentVehicleMappingCRUD();

    $vehicle_make = $data["vehicle_make"];
    $vehicle_model = $data["vehicle_model"];
    $vehicle_color = $data["vehicle_color"];
    $resident_id = $data["resident_id"];
    $license_plate_number  = $data["license_plate_number"];

    $result = $residentVehicleMappingCRUD->createMapping($resident_id,$vehicle_make,$vehicle_model,$vehicle_color,$license_plate_number);
    if(is_numeric($result))
    {
        echo "{\"success\":true,\"id\":" . $result . "}";

    }
    else{
        echo "{\"success\":false,\"msg\":\"" . $result . "\"}";

    }    



} else {
    echo "ONLY POST ALLOWED";
}