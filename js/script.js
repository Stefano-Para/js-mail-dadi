// Mail

// Chiedi all'utente la sua email
var richiestaEmail = prompt("Inserisci qui la tua email:");
console.log(richiestaEmail);


// lista email verificate 
var verifiedEmails = "uno";
console.log(verifiedEmails);

// controlla che sia nella lista di chi può accedere

if (richiestaEmail == verifiedEmails) {
    alert("Congratulazioni, puoi registrarti.")
} else {
    alert("ERRORRE: email non riconosciuta")
}

// stampa un messaggio appropriato sull'esito del controllo.