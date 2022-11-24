
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
        answer.innerHTML='<p> dannazione hai vinto!</p>';
    } else if (userNumber < pcNumber){
        answer.innerHTML='<p> Ahah! ho vinto io!</p>';
    } else {
        answer.innerHTML='<p> Uno stallo alla messicana, vale la pena giocare di nuovo!</p>';
    }
})


