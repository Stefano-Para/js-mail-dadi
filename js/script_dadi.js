//   GIOCO DADI:
var x = Math.floor(Math.random() * 6);
console.log("PC ha totalizzato " + x + " punti.")
    document.getElementById("pc").innerHTML = "PC ha totalizzato: " + x + " punti";

var y = Math.floor(Math.random() * 6);
console.log("TU ha totalizzato " + y + " punti.")
    document.getElementById("tu").innerHTML = "TU hai totalizzato: " + y + " punti";


var risultato;

    if (x < y) {        
        console.log("Hai vinto!");
        document.getElementById("risultato").innerHTML = "Hai vinto!"
    }
    if (x > y) {        
        console.log("Hai perso!");
        document.getElementById("risultato").innerHTML = "Hai perso!"
    }
    if (x == y) {        
        console.log("Pareggio!");
        document.getElementById("risultato").innerHTML = "Pareggio!"
    }

    // non riesco a confrontare i due console.log 