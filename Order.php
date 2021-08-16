<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        console.log(document.cookie)
    </script>
    <?php
        $to = "alessandro.guerra@studenti.unicam.it";
        $subject = "Ordine";
        $txt = "\n".$_COOKIE["cart"]."\nCon un costo totale di: ".$_COOKIE["tot"].
        "€\nDeve essere effettuato a:\n"
        .$_COOKIE["Nome"]." ".$_COOKIE["Cognome"].
        "\n".$_COOKIE["Citta"].", ".$_COOKIE["CAP"].", ".$_COOKIE["Via"].
        "\n\n".$_COOKIE["Note"];
        $headers = "From: ".$_COOKIE['email'] . "\r\n".
        "CC: pietro.angelici@studenti.unicam.it";
            
        mail($to, $subject, "Ordine: ".$txt, $headers);
        echo 'Email Sent.<br>';
        echo $txt;
    ?>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-auth.js"></script>


    <script>
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyAbfTGOn02jyRqyaNPX7niOrsA_EztNxT8",
            authDomain: "provasito-80e81.firebaseapp.com",
            databaseURL: "https://provasito-80e81.firebaseio.com",
            projectId: "provasito-80e81",
            storageBucket: "provasito-80e81.appspot.com",
            messagingSenderId: "370133519473",
            appId: "1:370133519473:web:2b463a843b8695e5e41fd0",
            measurementId: "G-3Z8KBR51KB"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        const db = firebase.firestore();
    </script>
    <script src="js/order.js"></script>


</body>
</html>