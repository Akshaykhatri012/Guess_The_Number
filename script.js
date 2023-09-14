'use strict';

// document.querySelector('.message').textContent = 'choose any number'
let generatedNumber = Math.floor(Math.random()*20)+1;
// document.querySelector('.number').textContent = generatedNumber;
// console.log(generatedNumber);

let inputNumber;
let inputMessage;
let score=20;
let highscore = 0;
document.querySelector('.check').addEventListener('click',function(){
    inputNumber = document.querySelector('.guess').value ;
    document.querySelector('.score').textContent = score ;
    
    if ( inputNumber == generatedNumber ) {
        document.querySelector('.message').textContent = "hurray you have won 💃💃, Click Again to play again !!";
        // console.log('hurray you have won!! ')
        document.querySelector("body").style.backgroundColor = "#35d811"
        if (score>highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    }

    else if(inputNumber>20 || inputNumber<1 ){     
            document.querySelector('.message').textContent = 'Invalid input 🚫!!';
             score;
            document.querySelector('.score').textContent = score ;     
    }  
    else if(inputNumber > generatedNumber ){ 
        if (score>1) {
            document.querySelector('.message').textContent = 'Guess is too high 📈!!';
            // console.log('Guess is too high!!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;          
            document.querySelector('.message').textContent = 'You have lost the game👎👎, Play Again!!';
            document.querySelector("body").style.backgroundColor = "red"
        }      
        
    } 
    else if(inputNumber < generatedNumber ){
        if (score>1) {
            document.querySelector('.message').textContent = 'Guess is too low 📉!!';
            // console.log('Guess is too low!!')
            score--;
            document.querySelector('.score').textContent = score;
            
        } else {
            document.querySelector('.score').textContent = 0;          
            document.querySelector('.message').textContent = 'You have lost the game👎👎, Play Again!!';
            document.querySelector("body").style.backgroundColor = "red"
        }
        
    }
 }
)
 document.querySelector('.again').addEventListener('click',function()
  {
     score =20;
     generatedNumber = Math.floor(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...'
    // document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.score').textContent = score;
    // score--;
    document.querySelector('.guess').value = '';
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector('.number').textContent = '?';
})