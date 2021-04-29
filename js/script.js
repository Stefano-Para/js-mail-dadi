// Mail

// Chiedi all'utente la sua email
var richiestaEmail = prompt("Inserisci qui la tua email:");
console.log(richiestaEmail);


// lista email verificate 
var verifiedEmails = ["uno@email.it", "due@email.it", "tre@email.it", "quattro@email.it", "cinque@email.it"];
console.log(verifiedEmails);

// controlla che sia nella lista di chi può accedere


var listed = false;
for (var i = 0; i < verifiedEmails.length; i++) {
    if (richiestaEmail == verifiedEmails[i]){
        listed = true;
    }
}
console.log(listed)

if (listed == true) {
    var message = "Congratulazioni! Ti sei registrato."
    document.getElementById("stamp").innerHTML = message;
} else {
    var message = "Errore: accesso negato."
    document.getElementById("stamp").innerHTML = message;
}

/* stampa un messaggio appropriato sull'esito del controllo.

 !!! QUESTO METODO FUNZIONA MA BYPASSA IL FOR 
 if (verifiedEmails.includes(richiestaEmail)) {
     alert("Congratulazioni, puoi registrarti.")
 } else {
     alert("ERRORRE: email non riconosciuta")
 }

 come faccio a fare in modo che solo gli input inseriti che abbiano @qualcosa.it siano riconosciuti?

 esempio: XXX@email.it è riconosciuta
          XXX@prova.com non è riconosciuta */




//   GIOCO DADI:


