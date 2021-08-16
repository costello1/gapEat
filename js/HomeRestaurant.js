var email = "";

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        email = user.email;
        document.cookie = "email="+email;
        console.log(email);
        x = email.search("@gapeat.it");
        email = email.slice(0, x);
        email = email.charAt(0).toUpperCase() + email.slice(1)

        db.collection("Locali").doc(email).collection("Ordini").orderBy("Ora", "desc")
            .onSnapshot((snapshot) => {
                document.getElementById("container").innerHTML = ""
                snapshot.forEach(function (doc) {
                    var card = document.createElement('div');
                    var name = document.createElement('div');
                    var luogo = document.createElement('div');
                    var cart = document.createElement('div');
                    var note = document.createElement('div');
                    var cancel = document.createElement('div');
                    var time = document.createElement('input');
                    var accept = document.createElement('div');
                    var comp = document.createElement('div');
                    var isCompleted = document.createElement('input');
                    var bot = document.createElement('div');

                    card.classList.add("order");
                    name.classList.add("name");
                    luogo.classList.add("luogo");
                    cart.classList.add("cart");
                    note.classList.add("note");
                    cancel.classList.add("cancel");
                    bot.classList.add("bot");
                    time.classList.add("time");
                    accept.classList.add("accept");
                    isCompleted.classList.add("isCompleted");
                    time.type = "time";
                    isCompleted.type = "checkbox";
                    isCompleted.checked = doc.data().isCompleted;
                    comp.innerHTML = "Completato: ";
                    
                    isCompleted.onchange = function () {
                        db.collection("Locali").doc(email).collection("Ordini").doc(doc.id).update({
                            isCompleted: !doc.data().isCompleted
                        });
                    }

                    cancel.onclick = function () {
                        console.log(doc.id);

                        window.open("cancel.php");
                        db.collection("Locali").doc(email).collection("Ordini").doc(doc.id).delete().then(function () {
                            console.log("Document successfully deleted!");
                        }).catch(function (error) {
                            console.error("Error removing document: ", error);
                        });
                    }

                    accept.onclick = function(){
                        document.cookie = "suppEmail="+doc.data().Email;
                        document.cookie = "time="+time.value;
                        window.open("accept.php");
                    }

                    accept.innerHTML = "✓";
                    name.innerHTML = "Nome: " + doc.data().Nome + " " + doc.data().Cognome;
                    luogo.innerHTML = "Consegnare a: " + doc.data().Città + " " + doc.data().CAP + " " + doc.data().Via + " ";
                    cart.innerHTML = "Carrello: "
                    for (i = 0; i < doc.data().Carrello.length; i++)
                        cart.innerHTML += doc.data().Carrello[i] + " ";
                    note.innerHTML = "Note aggiuntive: " + doc.data().Note;
                    cancel.innerHTML = "✘";

                    card.appendChild(cancel);
                    card.appendChild(name);
                    card.appendChild(luogo);
                    card.appendChild(cart);
                    card.appendChild(note);
                    bot.appendChild(accept);
                    bot.appendChild(time);
                    card.appendChild(bot);
                    comp.appendChild(isCompleted);
                    card.appendChild(comp);

                    card.id = doc.id;

                    document.getElementById("container").appendChild(card);
                });
            });

    } else {
        // No user is signed in.
        console.log("NON LOGGATO :(");
    }

    

});


$('.eliminoTutto').on('click', function () {
    db.collection("Locali").doc(email).collection("Ordini")
  .get()
  .then(res => {
    res.forEach(element => {
      element.ref.delete();
    });
  });
})

$('.block').on('click', function () {
    db.collection("Locali").doc(email).get().then((doc)=>{
        db.collection("Locali").doc(email).update({
            Disponibile: !doc.data().Disponibile
        })
    })
});






