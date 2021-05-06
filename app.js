// import functions 
import { didUserWin, getRandomThrow } from './utils.js';

//grab DOM elements
//const radioSelection = document.querySelector('input[type=radio]:checked');
//const userThrow = radioSelection.value;
const playButton = document.querySelector('#play-a-round-button');
const totalWinsDisplay = document.querySelector('#total-wins');
const totalLossesDisplay = document.querySelector('#total-losses');
const totalDrawsDisplay = document.querySelector('#total-draws');
const gameResults = document.querySelector('#game-results');
const resetButton = document.querySelector('#reset-button');
const resetTracker = document.querySelector('#reset-tracker');

// initialize state
let totalWins= 0;
let totalDraws= 0;
let totalLosses= 0;
let totalResets= 0;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {

    //get radio button selection
    const radioChoice = document.querySelector('input:checked');

    //define player selection
    const userThrow = radioChoice.value;

    //generate random computer number
    const computerNumber = Math.ceil(Math.random() * 3);

    //convert computer number into r/p/s string
    const computerThrow = getRandomThrow(computerNumber);
    
    //calculate the reusults of the round
    const roundResults = didUserWin(userThrow, computerThrow);

    //results for user win
    if(roundResults === 'user') {
        //increment total wins
        totalWins++;

        //display total wins
        totalWinsDisplay.textContent = `'Total Wins: ${totalWins}'`;

        //display round results
        gameResults.textContent = "You Have Defeated the Machine";

        //results for user draw
    } else if(roundResults === 'draw') {
        //increment total draws
        totalDraws++;

        //display total draws
        totalDrawsDisplay.textContent = `'Total Draws: ${totalDraws}'`;

        //display round results
        gameResults.textContent = 'You and the Computer are as equals';

        //results for user loss
    } else if(roundResults === 'computer') {
        //increment total losses
        totalLosses++;

        //display total losses
        totalLossesDisplay.textContent = `'Total Losses: ${totalLosses}'`;

        //display round results
        gameResults.textContent = "The Machine has Bested You. Rage against the Machine.";
    } 
});

//event listener to reset state to original and clear displays
resetButton.addEventListener('click', () => {

    //set original state
     totalWins= 0;
     totalDraws= 0;
     totalLosses= 0;

     //clear results displays
     totalWinsDisplay.textContent = '';
     totalDrawsDisplay.textContent = '';
     totalLossesDisplay.textContent = '';
     gameResults.textContent = '';

     //increment total resets
     totalResets++;

     //display total resets
     resetTracker.textContent= `'The Machine is tracking your futile attempts to cheat: ${totalResets}'`;
});