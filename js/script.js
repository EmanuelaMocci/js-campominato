
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe)

function randomNumeri(min, max){
        var numeri = Math.floor(Math.random() * max - min +1) + min;
        return numeri;
} 

var casuali = randomNumeri(1, 10);

// I numeri non possono essere duplicati.

// fintantochè la lunhezza l'array delle bombe è < di 16
// genera un numero casuale e
// se NON è presente nell'array delle bombe allora inseriscilo
// ciclo while invece che ciclo for

var bombe = [];
var punteggio = [];
var caselle = 10;
var termine = randomNumeri - caselle;

while (bombe.length < 1) {
    // genero un numero casuale
    var casuali = randomNumeri(1, caselle);
    // se non e' incluso nell'array bome allora lo pusho dentro
    if (bombe.includes(casuali) == false){
        bombe.push(casuali);
    }
  } console.log(bombe);



// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.

for (var i = 1; i <= caselle; i++) {
    document.getElementById("contenitore").innerHTML += `<div class="quadrato">${i}</div>`; // Template literal
}


document.getElementById("contenitore").addEventListener("click", 

    function(evento) {

        var squareClicked = parseInt(evento.target.innerHTML);

        if (bombe.includes(squareClicked) == true){
            alert("Hai preso la bomba! Il tuo punteggio è " + punteggio.length);
            evento.target.classList.add('bomba-img');
        } else if (punteggio.includes(squareClicked) == true) {
            alert("Non puoi cliccare due volte nella stessa casella");
        } else if (bombe.includes(squareClicked) == false) {
                alert("Hai ottenuto 1 punto");
                evento.target.classList.add('verde');
                punteggio.push(squareClicked);
        } 
    }
        
        
); 



// Al termine della partita il software deve comunicare il punteggio.



