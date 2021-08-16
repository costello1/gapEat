firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = "Home.html";
    } else {
    }
});
   
function signUp(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("pass_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    
    
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert(errorMessage)
      
    });
    alert("Registrazione effettuata");
}

function login(){
  //notify('Sei andato via! :\('); 
  console.log("asd");
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("pass_field").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert(errorMessage)
        // ...
      });
}