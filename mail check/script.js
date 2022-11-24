const buttonElement = document.getElementById('check');
const mailList = 
[
    'pincopallo-1@gmail.com',
'pincopallo-2@gmail.com',
'pincopallo-3@gmail.com',
'pincopallo-4@gmail.com',
'pincopallo-5@gmail.com',
'pincopallo-6@gmail.com',
'pincopallo-7@gmail.com',
'pincopallo-8@gmail.com',
'pincopallo-9@gmail.com',
'pincopallo-10@gmail.com',
'pincopallo-11@gmail.com',
'pincopallo-12@gmail.com',
'pincopallo-13@gmail.com',
'pincopallo-14@gmail.com',
'pincopallo-15@gmail.com',
'pincopallo-16@gmail.com',
'pincopallo-17@gmail.com',
'pincopallo-18@gmail.com',
'pincopallo-19@gmail.com',
'pincopallo-20@gmail.com',
'pincopallo-21@gmail.com',
'pincopallo-22@gmail.com'
];

console.log(mailList);

let answerElement = document.getElementById('answer');
let answer = answerElement.value = 'Siamo spiacenti ma la mail inserita non risulta presente nella nostra mail list';

buttonElement.addEventListener('click',function(){
    const mailElement = document.getElementById('usermail');
    for (let i=0; i<mailList.length; i++){
        if (mailElement.value == mailList[i]){
            answer = `ciao ${mailList[i]} ti confermiamo la tua presenza all'interno della nostra mail list!`;
        } else {}
    }
    answerElement.innerHTML = answer;

    answer = 'Siamo spiacenti ma la mail inserita non risulta presente nella nostra mail list';
})

