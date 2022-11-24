// dichiaro un array contenente tutti i valori possibili del gioco

const option = [1,2,3,4,5,6];

// dichiaro due variabili che preleveranno un numero casuale da option (una per l'user l'altra per il PC)

let userNumber = option[Math.floor(Math.random()*option.length)];
console.log(userNumber);

let pcNumber = option[Math.floor(Math.random()*option.length)];
console.log(pcNumber);

// dichiaro una variabile che identifica il bottone di gioco

const playButton = document.getElementById('play');

//Creo un comando che rimandi a schermo l'esito del gioco quando l'utente preme il bottone

    //dichiaro una variabile che identifica il <p> relativo alla risposta

const answer = document.getElementById('answer');

playButton.addEventListener('click', function(){
    if (userNumber > pcNumber) {
        // '<p> dannazione hai vinto!</p>'
    } else if (userNumber < pcNumber){
        // '<p> Ahah! ho vinto io!</p>'
    } else {
        // '<p> Uno stallo alla messicana, vale la pena giocare di nuovo!</p>'
    }
})


