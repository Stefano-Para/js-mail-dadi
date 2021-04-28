// Mail

// Chiedi all'utente la sua email
var richiestaEmail = prompt("Inserisci qui la tua email:");
console.log(richiestaEmail);


// lista email verificate 
var verifiedEmails = ["uno@email.it", "due@email.it", "tre@email.it"];
console.log(verifiedEmails);

// controlla che sia nella lista di chi può accedere

if (verifiedEmails.includes(richiestaEmail)) {
    alert("Congratulazioni, puoi registrarti.")
} else {
    alert("ERRORRE: email non riconosciuta")
}
// stampa un messaggio appropriato sull'esito del controllo.



// come faccio a fare in modo che solo gli input inseriti che abbiano @qualcosa.it siano riconosciuti?

// esempio: XXX@email.it è riconosciuta
//          XXX@prova.com non è riconosciuta