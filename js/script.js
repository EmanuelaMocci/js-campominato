
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

while (bombe.length < 16) {
    // genero un numero casuale
    var casuali = randomNumeri(1, 100);
    // se non e' incluso nell'array bome allora lo pusho dentro
    if (bombe.includes(casuali) == false){
        bombe.push(casuali);
    }
  } console.log(bombe);



// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.

for (var i = 1; i <= 100; i++) {
    document.getElementById("contenitore").innerHTML += `<div class="quadrato">${i}</div>`;
}

document.getElementById("contenitore").addEventListener("click", 

    function(evento) {

        var squareClicked = parseInt(evento.target.innerHTML);

        if (bombe.includes(squareClicked) == true){
            alert("Hai preso la bomba!");
            evento.target.classList.add('rosso');
        } 
        else {  evento.target.classList.add('verde');
                alert("Complimenti, sei salvo!");
                return evento;
        }    
}
); 

  







// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.


// Al termine della partita il software deve comunicare il punteggio.


// ---------------------------------------------------------------------------------------------------

// // Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// var celleUtente = parseInt(prompt("Inserisci il numero di celle desiderato"));

// caselle(celleUtente);

// // Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// // Crea un ciclo for per ripetere le celle

// function caselle(celle) {
//     for (var i = 1; i <= celle; i++) {
//         document.getElementById("contenitore").innerHTML += `<div class="quadrato">${i}</div>`;
//     }
// }

// // Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.
// // Crea il click con la funzione

// document.getElementById("contenitore").addEventListener("click", 

//      function(evento) {

//         alert("Il numero della casella selezionata è " + (evento.target.innerHTML) );

//         evento.target.classList.toggle('rosso');

//         console.log(evento.target);
// }); 

