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
        window.location = "HomeRestaurant.html";
    } else {
    }
});

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("pass_field").value;
    if(userEmail.includes("@gapeat.it"))
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert(errorMessage)
        // ...
    });
}