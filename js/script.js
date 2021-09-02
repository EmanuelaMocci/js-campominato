
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe)

function randomNumeri(min, max){
   var numeri = Math.floor(Math.random() * max - min +1) + min;
   return numeri;
}

var casuali = randomNumeri(1, 100);
console.log(casuali);





// I numeri non possono essere duplicati.


// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)


// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.


// Al termine della partita il software deve comunicare il punteggio.




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

