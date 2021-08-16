window.onload = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("LOGGATO :)");
          console.log(user.email);
          console.log(document.cookie)
          document.cookie = "email="+user.email;
        } else {
          // No user is signed in.
          console.log("NON LOGGATO :(");
        }
      });

      view();
}

function view(){
    var box = document.getElementById("info");
    var card = document.createElement('div');
    var name = document.createElement('div');
    var desc = document.createElement('div');
    var delivery = document.createElement('div');
    var luogo = document.createElement('div');
  
    card.classList.add("restaurant");
    name.classList.add("name");
    desc.classList.add("desc");
    delivery.classList.add("desc");
    luogo.classList.add("luogo");
  
    name.style.backgroundImage = "url('https://picsum.photos/200/800')"
    name.innerHTML = item.data().Nome;
    desc.innerHTML = item.data().Descrizione;
    delivery.innerHTML = "Consegna: "+item.data().Consegna+"€";
    luogo.innerHTML = item.data().Luogo;
  
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(delivery);
    card.appendChild(luogo);
  
    document.getElementById("container").appendChild(card);
}