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
      loadElements();
    
      $(document).on( 'click', '.card', function() {
          var restaurant = $(this).children('.box').children('.content').children('.name').text();
          document.cookie = "restaurant="+restaurant;
          window.location = 'restaurant.html';
      });

      $(document).on( 'click', '#logo', function() {
        console.log("aaa");
        window.location = 'index.html';
      });
}
var options="";

function loadElements(){
  var check = [];

  db.collection('Locali').get().then((snapshot) => {
    snapshot.forEach(function(item){
          var tipi = item.data().Tipologia;
          for(var i = 0; i < tipi.length; i++){
              if(!check.includes(tipi[i])){
                check.push(tipi[i]);

                var button = document.createElement('input');
                button.type = "image";
                button.width = "60";
                button.classList.add(tipi[i]);
                button.src = "img/Tipologie/"+tipi[i]+".svg";
                button.innerHTML = tipi[i];

                var span = document.createElement('span');
                var txt = document.createElement('span');
                txt.innerHTML=tipi[i]+"<br>";
                txt.classList.add("catDes");
                span.appendChild(txt);
                span.appendChild(button);
                document.getElementById("category").appendChild(span);
              }
          }


          var card = document.createElement('div');
          var name = document.createElement('h3');
          var img = document.createElement('img');
          var desc = document.createElement('p');
          var delivery = document.createElement('p');
          var numero = document.createElement('p');
          var luogo = document.createElement('p');
          var btn = document.createElement('a');

          var box = document.createElement('div');
          var content = document.createElement('div');
  
          card.classList.add("card");
          card.classList.add("show");
          for(var x=0; x<item.data().Tipologia.length; x++)
            card.classList.add(item.data().Tipologia[x]);

          box.classList.add("box");
          content.classList.add("content");

          name.classList.add("name");
          img.classList.add("img");
          desc.classList.add("desc");
          delivery.classList.add("desc");
          numero.classList.add("numero");
          luogo.classList.add("luogo");
          btn.classList.add("menu")
  
          img.src = "https://picsum.photos/800";
          name.innerHTML = item.data().Nome;
          desc.innerHTML = item.data().Descrizione;
          if(item.data().Consegna==-2){
            delivery.innerHTML = "Prenotazione SOLO su chiamata";
          }
          else if(item.data().Consegna==-1) 
            delivery.innerHTML = "Questo locale non consegna al domicilio ma effettua l'asporto";
          else
            delivery.innerHTML = "Consegna: "+item.data().Consegna+"€";
          numero.innerHTML = "Numero: " + item.data().Numero;
          luogo.innerHTML = item.data().Luogo;
          btn.innerHTML = "Menù"
  
          content.appendChild(img);
          content.appendChild(name);
          content.appendChild(desc);
          content.appendChild(delivery);
          content.appendChild(numero);
          content.appendChild(luogo);
          content.appendChild(btn);
          
          box.appendChild(content);
          card.appendChild(box);
  
          document.getElementById("container").appendChild(card);

          $( "#place" ).change(function() {
            console.log($('#place').val());

            if(!item.data().LuogoConsegna.includes($('#place').val().toLowerCase()))
              card.style.display = "none";
            if(item.data().LuogoConsegna.includes($('#place').val().toLowerCase()))
              card.style.display = "";
            if($('#place').val()=="")
              card.style.display = "";

          });
        },

        
      )
     
      $('#filter #category input').on('click', function(){
        filterSelection(this.classList.toString());
      })
    }
    )
}


function logout(){
  firebase.auth().signOut();
  window.location = "Index.html";
}

function noFilter(){
  x = document.getElementsByClassName("card");
  for (i = 0; i < x.length; i++) {
      x[i].classList.add("show");
  }
}
  
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > 1) w3AddClass(x[i], " show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
      }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
  }
  element.className = arr1.join(" ");
}

