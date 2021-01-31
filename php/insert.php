<?php
    include "database.php";
    if(isset($_POST['submit']))
    {    
        $name = $_POST['nome'];
        $cognome = $_POST['cognome'];
        $email = $_POST['mail'];
        //$posti = $_POST['selezionato']; //da javascript
        $sql = "INSERT INTO prenotazioni (nome, cognome, mail)
                VALUES ('$nome','$cognome','$email')";
        if (mysqli_query($conn, $sql)) {
            echo "New record has been added successfully !";
        } else {
            echo "Error: " . $sql . ":-" . mysqli_error($conn);
        }
    mysqli_close($conn);
    }
?>