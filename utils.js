export { didUserWin };

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