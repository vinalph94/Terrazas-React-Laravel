<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");


require_once '../DatabaseConnection.php';

class GardenCRUD
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

    function CreateUser()
    {
        $sql = "CREATE TABLE `users` (
            `id` int(11)  NOT NULL AUTO_INCREMENT,
            `email` varchar(255) NOT NULL,
            `phone` varchar(10) NOT NULL,
            `password_hashed` varchar(255) NOT NULL,
            `name` varchar(255) NOT NULL,
            `email_verification_code` varchar(255) NOT NULL,
            `phone_verification_code` varchar(255) NOT NULL,
            `email_verified` varchar(5) NOT NULL DEFAULT 0,
            `phone_verified` varchar(5) NOT NULL DEFAULT 0,
            `role` varchar(10) NOT NULL,
            PRIMARY KEY (`id`)
          ) 
          ";

        $result = mysqli_query($this->conn, $sql);
    }

    function CreateTiming()
    {
        $sql = "CREATE TABLE `garden_timing` (
            `garden_id` INT(5) NOT NULL AUTO_INCREMENT ,
             `day` VARCHAR(10) NOT NULL ,
              `start_time` TIME(4) NOT NULL ,
              `end_time` TIME(4) NOT NULL ,
               PRIMARY KEY  (`garden_id`));
               ";

        $result = mysqli_query($this->conn, $sql);

        
    }

    function CreateResident()
    {
        $sql = "CREATE TABLE `garden_Access` (
            `membership_id_r` INT(10) NOT NULL AUTO_INCREMENT ,
         `name` VARCHAR(20) NOT NULL ,
          
           `join_date` DATE NOT NULL ,
           `decision` VARCHAR(10)  DEFAULT 'pending' ,
           `resident_type` VARCHAR(10) NOT NULL ,
           `resident_id` INT NOT NULL UNIQUE,
            PRIMARY KEY (`membership_id_r`),
            FOREIGN KEY (`resident_id`) REFERENCES users(`id`))
               ";

        $result = mysqli_query($this->conn, $sql);
    }

    function CreateEvent()
    {
        $sql = "CREATE TABLE `AllEvent` (
            `event_id` INT(10) NOT NULL AUTO_INCREMENT ,
         `event_name` VARCHAR(20) NOT NULL ,
         `event_Description` VARCHAR(50) NOT NULL ,
           `event_date` DATE NOT NULL ,
           `place` VARCHAR(10) NOT NULL ,
           `image`VARCHAR(50) NOT NULL,
            PRIMARY KEY (`event_id`))
               ";

        $result = mysqli_query($this->conn, $sql);
    }

    function CreateEventRegistration()
    {
        $sql = "CREATE TABLE `EventRegistration` (
           `Regid` INT NOT NULL AUTO_INCREMENT,
            `event_id` INT NOT NULL,
             `participant_name` VARCHAR(255) NOT NULL,
            `email` VARCHAR(255) NOT NULL,
             `phone` VARCHAR(20) NOT NULL,
             `resident_id` INT NOT NULL ,
            PRIMARY KEY (`Regid`),
            FOREIGN KEY (`event_id`) REFERENCES AllEvent(`event_id`),
            FOREIGN KEY (`resident_id`) REFERENCES users(`id`)
            )
               ";

        $result = mysqli_query($this->conn, $sql);
    }






}

$residentCrud = new GardenCRUD();
// $result = $residentCrud->CreateTiming();
$result = $residentCrud->CreateResident();
// $result = $residentCrud->CreateUser();
// $result = $residentCrud->CreateEvent();
// $result = $residentCrud->CreateEventRegistration();