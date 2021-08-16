window.onload = function () {

  var restaurant = readCookie('restaurant');
  document.getElementById("restaurant").innerHTML = restaurant;

  var cart = [];
  var indexCart = 0;
  var tot = 0;
  var test = [];

  console.log(document.cookie)

  db.collection('Locali').doc(restaurant).collection('Menu').get().then((snapshot) => {
    if (snapshot.size == 0)
      document.body.append("Questo locale attualmente non ha articoli disponibili! :)");
    /*if(snapshot.Consegna==-1)
      document.getElementById("info").innerHTML = "Questo locale non effettua consegne a domicilio!"
    else
      document.getElementById("info").innerHTML = "Questo locale effettua consegne a "+snapshot.Consegna+"€"*/

    snapshot.forEach(function (item) {
      if (!test.includes(item.data().Tipo))
        test.push(item.data().Tipo);

      var card = document.createElement('div');
      var name = document.createElement('h3');
      var ingr = document.createElement('p');
      var price = document.createElement('p');
      var add = document.createElement('div');
      var remove = document.createElement('div');

      var box = document.createElement("div");
      var content = document.createElement("div")



      card.classList.add("card");

      box.classList.add("box");
      content.classList.add("content");

      name.classList.add("name");
      ingr.classList.add("ingr");
      price.classList.add("price");
      add.classList.add("add");
      remove.classList.add("remove");

      name.innerHTML = item.data().Nome;

      ingr.innerHTML = "Ingredienti: " + item.data().Ingredienti;
      price.innerHTML = "Prezzo: " + item.data().Prezzo + "€";
      add.innerHTML = "<img src='img/plus.svg' width=30>";
      remove.innerHTML = "<img src='img/minus.svg' width=30>";

      add.onclick = function () {
        cart.push(item.data().Nome);
        tot += item.data().Prezzo;
        indexCart++;
        var cartList = "";
        for (index = 0; index < cart.length; index++) {
          cartList += cart[index] + "<br>";
        }
        document.getElementById("content-cart").innerHTML = cartList;
        document.getElementById("counter").style.visibility = "visible";
        document.getElementById("counter").innerHTML = cart.length;
      }

      remove.onclick = function () {
        var index = cart.indexOf(item.data().Nome);
        if (index > -1) {
          cart.splice(index, 1);
        }

        tot -= item.data().Prezzo;
        indexCart--;
        var cartList = "";
        for (index = 0; index < cart.length; index++) {
          cartList += cart[index] + "<br>";
        }
        document.getElementById("content-cart").innerHTML = cartList;
        document.getElementById("counter").style.visibility = "visible";
        document.getElementById("counter").innerHTML = cart.length;
      }

      content.appendChild(name);
      content.appendChild(ingr);
      content.appendChild(price);


      box.appendChild(content);
      box.appendChild(add);
      box.appendChild(remove);
      card.appendChild(box);
     
      var portate = ["Antipasto", "Primo", "Secondo", "Pizza", "Pizza Rossa", "Bibite"];

      for (x of portate) {
        if (item.data().Tipo.includes(x))
          document.getElementById(x).appendChild(card);  
      }

    });
    var portate = ["Antipasto", "Primo", "Secondo", "Pizza", "Pizza Rossa", "Bibite"];
    var y;
    for (x= 0; x < portate.length; x++) {
      y = document.getElementById(portate[x]);
      console.log(y.childNodes.length);
      if(y.childNodes.length == 3)
        y.style.display = "none";
    }
  });

  
  


  db.collection('Locali').doc(restaurant).get().then(function (doc) {
    document.getElementById('Racconto').innerHTML = doc.data().Racconto;
  });

  $("#cart").on('click', function () {
    document.cookie = "cart=" + cart;
    document.cookie = "tot=" + tot;
    window.location = "cart.html";
  });

  $(document).on('click', '#logo', function () {
    console.log("aaa");
    window.location = 'index.html';
  });
}




function readCookie(cookieName) {
  if (document.cookie.length > 0) {
    var inizio = document.cookie.indexOf(cookieName + "=");
    if (inizio != -1) {
      inizio = inizio + cookieName.length + 1;
      var fine = document.cookie.indexOf(";", inizio);
      if (fine == -1) fine = document.cookie.length;
      return unescape(document.cookie.substring(inizio, fine));
    } else {
      return "";
    }
  }
  return "";
}

function logout() {
  firebase.auth().signOut();
  window.location = "Index.html";
}
