<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once("ResidentVehicleMappingCRUD.php");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if(!isset($_GET["resident_id"])){
        echo "{\"success\":\"false\",\"msg\":\"resident_id not provided\"}";
        return;
    }
    
    $resident_id = $_GET["resident_id"];
    $residentVehicleMappingCRUD = new ResidentVehicleMappingCRUD();
        
    // READ operation - Get all mappings
    $allMappings = $residentVehicleMappingCRUD->getAllMappings($resident_id);
    
    
        print("{\"success\":true,");
        print_r("\"data\" : " . json_encode($allMappings));
        print("}");
    
 

}
else{
    echo "ONLY GET ALLOWED";
}






