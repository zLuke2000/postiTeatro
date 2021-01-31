<?php
    $db_host = "localhost:3306";
    $db_utente = "root";
    $db_password = "";
    $db_nome = "posti_teatro";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
    if(!$conn){
        die('Could not Connect MySql Server:' .mysql_error());
    }
?>