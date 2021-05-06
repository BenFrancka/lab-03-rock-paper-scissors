// import functions 
import { didUserWin } from './utils.js';

//grab DOM elements
//const radioSelection = document.querySelector('input[type=radio]:checked');
//const userThrow = radioSelection.value;
const playButton = document.querySelector('#play-a-round-button');
const totalWinsDisplay = document.querySelector('#total-wins');
const totalLossesDisplay = document.querySelector('#total-losses');
const totalDrawsDisplay = document.querySelector('#total-draws');
const roundResults = document.querySelector('#game-results');


// initialize state
let totalWins= 0;
let totalLosses= 0;
let totalDraws= 0;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {

    //get radio button selection
    const radioChoice = document.querySelector('input.checked');

    //define player selection
    const userThrow = radioChoice.nodeValue;

    //generate random computer throw
    const computerThrow = Math.ceil(Math.random() * 3);
    
    //calculate the reusults of the round
    const roundResults = didUserWin(userThrow, computerThrow);

    if(roundResults === 'user') {
        //increment total wins
        totalWins++;

        //display total wins
        totalWinsDisplay.textContent = `'Total Wins: ${totalWins}'`;

        //display round results
        roundResults.textContent = "You Have Defeated the Machine";
    } else if(rounResults === 'draw') 
    


    
});