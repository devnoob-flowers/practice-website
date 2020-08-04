<?php 
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    if (isset($_POST['submit'])) {
        $fname = $_POST['firstname'];
        $lname = $_POST['lastname'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "bdflowerss@icloud.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from ".$name.".\n\n\".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.php?mailsend");


    }
    
?>