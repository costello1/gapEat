window.onload = function(){

    var cart = readCookie('cart');
    var tot = readCookie('tot');
    // cart = cart.replace(/,/g,"<br>");
    document.getElementById("cart").innerHTML+=cart;
    document.getElementById("tot").innerHTML+=tot+"€";

console.log(cart)

function buratti(array){
  var smallest = array[0];
  var count = 0;
  var test;
  console.log(smallest);
  for(var i = 0; i < array.length; i++) {
      if(array[i] < smallest) {
          smallest = array[i];
          count = 0;
      }
      if(smallest===array[i]) {
          count++;
          console.log(smallest);
          test += smallest+" X"+count
      }
  }
  return test;
}

console.log(buratti(cart));


    $('#btn').on('click', function(){
      /*if (
      document.forms['form'].Nome.value != ""||
      document.forms['form'].Cognome.value != ""||
      document.forms['form'].Citta.value != ""||
      document.forms['form'].Via.value != ""||
      document.forms['form'].CAP.value != ""||
      document.forms['form'].Telefono.value != ""
      ) {*/
        console.log("asd");
        document.cookie = "Nome="+document.getElementById("Nome").value;
        document.cookie = "Cognome="+document.getElementById("Cognome").value;
        document.cookie = "Citta="+document.getElementById("Citta").value;
        document.cookie = "Via="+document.getElementById("Via").value;
        document.cookie = "CAP="+document.getElementById("CAP").value;
        document.cookie = "Telefono="+document.getElementById("Telefono").value;
        document.cookie = "Note="+document.getElementById("Note").value;

        window.location = "Order.php";
      //}
      //else
       // alert("Rimepi tutti i campi necessari!");
    })
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

  function logout(){
    firebase.auth().signOut();
    window.location = "Index.html";
  }
  