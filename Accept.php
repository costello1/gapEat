<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $to = "alessandro.guerra@studenti.unicam.it";
    $subject = "Ordine Accettato";
    $txt = "Il tuo ordine è stato accettato e verrà consegnato alle ore ".$_COOKIE['time'];
    $headers = "From: ".$_COOKIE['email'] . "\r\n".
    "CC: ".$_COOKIE['suppEmail'];
        
    mail($to, $subject, "Ordine: ".$txt, $headers);
    echo 'Email Sent.<br>';
    echo $txt;
?>
</body>
</html>