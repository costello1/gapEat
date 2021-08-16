window.onload = function(){
    console.log(document.cookie)
    var restaurant = readCookie('restaurant');
    var nome = readCookie('Nome');
    var cognome = readCookie('Cognome');
    var cap = readCookie('CAP');
    var città = readCookie('Citta');
    var via = readCookie('Via');
    var cart = readCookie('cart');
    var note = readCookie('Note');
    var email = readCookie('email');

    db.collection("Locali").doc(restaurant).collection("Ordini").doc().set({
        Nome: nome,
        Cognome: cognome,
        CAP: cap,
        Città: città,
        Via: via,
        Carrello: cart,
        Note: note,
        Ora: Date.now(),
        Email: email,
        isCompleted: false
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    /*db.collection("Locali").doc(restaurant).collection("Ordini").get().then(snap => {
        var size = snap.size 
        db.collection("Locali").doc(restaurant).collection("Ordini").doc(size).set({
            Nome: nome,
            Cognome: cognome,
            CAP: cap,
            Città: città,
            Via: via,
            Carrello: cart,
            Note: note
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    });*/ 
}


function readCookie(cookieName){
    if (document.cookie.length > 0)
    {
    var inizio = document.cookie.indexOf(cookieName + "=");
    if (inizio != -1)
    {
        inizio = inizio + cookieName.length + 1;
        var fine = document.cookie.indexOf(";",inizio);
        if (fine == -1) fine = document.cookie.length;
        return unescape(document.cookie.substring(inizio,fine));
    }else{
        return "";
    }
    }
    return "";
}
