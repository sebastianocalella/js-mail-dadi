
const option = [];
const playButton = document.getElementById('play');
const answer = document.getElementById('answer');

for (let i=1; i<=6; i++){
    option.push(i);
}

playButton.addEventListener('click', function(){
    let userNumber = option[Math.floor(Math.random()*option.length)];
    console.log(userNumber);
    
    let pcNumber = option[Math.floor(Math.random()*option.length)];
    console.log(pcNumber);
    if (userNumber > pcNumber) {
        answer.value ='<p> dannazione hai vinto!</p>';
    } else if (userNumber < pcNumber){
        answer.value ='<p> Ahah! ho vinto io!</p>';
    } else {
        answer.value ='<p> Uno stallo alla messicana, vale la pena giocare di nuovo!</p>';
    }
    answer.innerHTML = `<p> il tuo numero è: ${userNumber}</p> <p>il mio numero è: ${pcNumber}</p> <p>${answer.value}`
})


