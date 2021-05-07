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

function getRandomThrow() {
    const computerNumber = Math.ceil(Math.random() * 3);

    if (computerNumber === 1)
        return 'rock';
    
    if (computerNumber === 2)
        return 'paper';
    
    if (computerNumber === 3)
        return 'scissors';
}