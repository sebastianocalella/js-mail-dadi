const buttonElement = document.getElementById('check');
const mailElement = document.getElementById('usermail');
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
console.log(usermail.value);
console.log(mailList.length);

buttonElement.addEventListener('click',function(){
    for (let i=0; i<mailList.length; i++){
        if (mailElement.value == mailList[i]){
            console.log('yes');
        }else {
            console.log('nope');
        }
    }
})
