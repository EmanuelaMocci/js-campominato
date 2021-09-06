
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe)

function randomNumeri(min, max){
        var numeri = Math.floor(Math.random() * max - min +1) + min;
        return numeri;
} 

var casuali = randomNumeri(1, 100);

// I numeri non possono essere duplicati.

// fintantochè la lunhezza l'array delle bombe è < di 16
// genera un numero casuale e
// se NON è presente nell'array delle bombe allora inseriscilo
// ciclo while invece che ciclo for

var bombe = [];
var numeroBombe = 16;
var punteggio = [];
var caselle = 100;
var termine = caselle - numeroBombe;


// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.

function griglia(celle){

    document.getElementById("contenitore").innerHTML = "";
    for (var i = 1; i <= celle; i++) {
        document.getElementById("contenitore").innerHTML += `<div class="quadrato">${i}</div>`; // Template literal
    }
    
}


document.getElementById("contenitore").addEventListener("click", 

    function(evento) {

        var squareClicked = parseInt(evento.target.innerHTML);

        if (bombe.includes(squareClicked) == true){
            alert("Hai preso la bomba! Hai ottenuto un punteggio totale pari a: " + punteggio.length);
            evento.target.classList.add('bomba-img');
            setTimeout(function(){
                window.location.reload(1);
             }, 2000);
        } else if (punteggio.includes(squareClicked) == true) {
            alert("Non puoi cliccare due volte nella stessa casella.");
        } else if (bombe.includes(squareClicked) == false) {
                evento.target.classList.add('verde');
                punteggio.push(squareClicked);
        } if (punteggio.length == termine) {
            alert("Complimenti, hai vinto!");
            setTimeout(function(){
                window.location.reload(1);
             }, 2000);
        }
    } 
     
); 

var facile = document.getElementById("facile");
var intermedio = document.getElementById("intermedio");
var difficile = document.getElementById("difficile");

facile.addEventListener("click",
    function() {
        celle = 100;
        griglia(celle);
        while (bombe.length < numeroBombe) {
            // genero un numero casuale
            var casuali = randomNumeri(1, 100);
            // se non e' incluso nell'array bome allora lo pusho dentro
            if (bombe.includes(casuali) == false){
                bombe.push(casuali);
            }
          } console.log(bombe);
          bombe = [];
    }
);
intermedio.addEventListener("click",
    function() {
        celle = 80;
        griglia(celle);
        while (bombe.length < numeroBombe) {
            // genero un numero casuale
            var casuali = randomNumeri(1, celle);
            // se non e' incluso nell'array bome allora lo pusho dentro
            if (bombe.includes(casuali) == false){
                bombe.push(casuali);
            }
          } console.log(bombe);
          bombe = [];
    }
);
difficile.addEventListener("click",
    function() {
        celle = 50;
        griglia(celle);
        while (bombe.length < numeroBombe) {
            // genero un numero casuale
            var casuali = randomNumeri(1, celle);
            // se non e' incluso nell'array bome allora lo pusho dentro
            if (bombe.includes(casuali) == false){
                bombe.push(casuali);
            }
          } console.log(bombe);
          bombe = [];
    }
);




// Al termine della partita il software deve comunicare il punteggio.



