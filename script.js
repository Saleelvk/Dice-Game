'use strict';
// Selecting elements
const score0El= document.getElementById('score--0');
const score1El= document.getElementById('score--1');
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');
const diceEl= document.querySelector('.dice');
const btnNew= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');


   
    let score,currentScore,activePlayer,player;
// starting conditions





const initialization=()=>{

    score=[0,0];
    currentScore=0;
    activePlayer=0;
    player=true;
  
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}
initialization() 

const switchPlayer =function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;     
    activePlayer = activePlayer===0 ? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
// 1. generating number
btnRoll.addEventListener('click',()=>{

    if(player){
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.src=`dice-${dice}.png`;
    // check for roll 1 ? switch player: continue;
     if(dice!==1){      
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore; 

    }else{
        switchPlayer()      
    }

    }
    
})
btnHold.addEventListener('click',()=>{

    if(player){
        score[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
        // scores[0]+=currentScore;  
        if(score[activePlayer]>=20){
            player=false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            
        }else{
            switchPlayer();
            
        }
        

    }
   
} )
btnNew.addEventListener('click',initialization)
