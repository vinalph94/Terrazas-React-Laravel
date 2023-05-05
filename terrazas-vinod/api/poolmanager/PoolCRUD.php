<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");


require_once '../DatabaseConnection.php';

class PoolCRUD
{
    private $conn;

    function __construct()
    {  
        

        $db = new DatabaseConnection();

        $this->conn = $db->getConnection();
        echo "connected to db";
       
    }

    function __destruct()
    {
        $this->conn->close();
    }

    function CreatePoolTiming()
    {
        $sql = "CREATE TABLE `Pool_timing` (
            `pool_id` INT(5) NOT NULL AUTO_INCREMENT ,
             `day` VARCHAR(10) NOT NULL ,
              `start_time` TIME(4) NOT NULL ,
              `end_time` TIME(4) NOT NULL ,
               PRIMARY KEY  (`pool_id`));
               ";

        $result = mysqli_query($this->conn,$sql);
    }

    function Createpoolresident()
    {
        $sql = "CREATE TABLE `pool_Access` (
            `membership_id_r` INT(10) NOT NULL AUTO_INCREMENT ,
         `name` VARCHAR(20) NOT NULL ,
          
           `join_date` DATE NOT NULL ,
           `decision` VARCHAR(10) DEFAULT 'pending' ,
           `resident_type` VARCHAR(10) NOT NULL ,
           `resident_id` INT NOT NULL UNIQUE,
            PRIMARY KEY (`membership_id_r`),
            FOREIGN KEY (`resident_id`) REFERENCES users(`id`))
               ";

        $result = mysqli_query($this->conn,$sql);
    }

    

    
    
}

$PoolCrud = new PoolCRUD();
// $result = $PoolCrud->CreatePoolTiming();
$result = $PoolCrud->Createpoolresident();
