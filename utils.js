export { didUserWin, getRandomThrow };

function didUserWin(userThrow, computerThrow) {
   if (
       (userThrow === 'rock' && computerThrow === 'scissors')
       || (userThrow === 'scissors' && computerThrow === 'paper')
       || (userThrow === 'paper' && computerThrow === 'rock')
   ) {
       return 'user';
   } else if (userThrow === computerThrow) {
       return 'draw';
   } else {
       return 'computer';
   }  
}

function getRandomThrow(computerChoice) {

    if(computerChoice === 1)
        return 'rock';
    
    if(computerChoice === 2)
        return 'paper';
    
    if(computerChoice === 3)
        return 'scissors';
}