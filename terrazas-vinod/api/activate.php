<?php

require 'connection.php';

if(isset($_GET['token'])){
    $token = $_GET['token'];
    $query = "update user set status='1' where token='$token'";
    if($db->query($query)){
        header("Location:index.php?success=Account Activated!!");
        exit();
    }
    
}

?>