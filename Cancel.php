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
    $subject = "Ordine Annullato";
    $txt = "Causa imprevisti, il tuo ordine non può essere effettuato dal ristorante";
    $headers = "From: ".$_COOKIE['email'] . "\r\n".
    "CC: pietro.angelici@studenti.unicam.it";
        
    mail($to, $subject, "Ordine: ".$txt, $headers);
    echo 'Email Sent.<br>';
    echo $txt;
?>

</body>
</html>