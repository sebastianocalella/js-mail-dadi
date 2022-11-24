// dichiaro un array contenente tutti i valori possibili del gioco

const option = [1,2,3,4,5,6];

// dichiaro due variabili che preleveranno un numero casuale da option (una per l'user l'altra per il PC)

let userNumber = option[Math.floor(Math.random()*option.length)];
console.log(userNumber);

let pcNumber= option[Math.floor(Math.random()*option.length)];
console.log(pcNumber);