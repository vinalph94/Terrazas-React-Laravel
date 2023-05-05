<?php

class DatabaseConnection
{
    private $servername;
    private $username;
    private $password;
    private $database;

    function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "password";
        $database = "terrazas";

        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
    }

    public function getConnection()
    {
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->database);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        return $conn;
    }
}


// $db = new DatabaseConnection();
// $con = $db->getConnection();

