let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum);
let attempt = '';
let win = '';
let lose = '';
const attempts = document.querySelector('.attempts');
const wins = document.querySelector('.wins');
const loses = document.querySelector('.loses');
const guess = document.querySelector('.guess');
const refresh = document.getElementById('refresh');
const checkResult = document.getElementById('check');
checkResult.addEventListener('click',()=>{
   const resultMessage = document.getElementById('result');
   const numberInput = document.getElementById('numberInput');
   const numberValue = numberInput.value;
   if(isNaN(numberValue) || numberValue < 1 || numberValue > 100){
        resultMessage.textContent = 'Input a Number from 1 to 100'
   }else{
       if(numberValue < randomNum){
            resultMessage.textContent = 'Opps, The answer is higher than your guess';
            attempts.textContent = attempt++ + 1;
            loses.textContent = lose++ + 1;
       }else if(numberValue > randomNum){
            resultMessage.textContent = 'Ohh No, The answer is lower than your guess';
            attempts.textContent = attempt++ + 1;
            loses.textContent = lose++ + 1;
       }else if(numberValue == randomNum){
            resultMessage.textContent = 'WOW, Your guess is correct';
            attempts.textContent = attempt++ + 1;
            wins.textContent = win++ + 1;
            guess.textContent = randomNum;
            refresh.style.display = 'block'
       };
   };
});
refresh.addEventListener('click',()=>{
    randomNum = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNum)
    document.getElementById('numberInput').value = '';
    document.getElementById('result').textContent = '';
    document.querySelector('.attempts').textContent = '';
    document.querySelector('.wins').textContent = '';
    document.querySelector('.loses').textContent = '';
    document.querySelector('.guess').textContent = '';
    refresh.style.display = 'none'
});