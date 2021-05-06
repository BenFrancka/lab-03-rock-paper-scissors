// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
import { getRandomThrow } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// didUserWin Tests

    test('compares userThrow to ComputerThrow and evaluates with Rock, Paper, Scissors rules', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const expected = 'user';
        
        //Act 
        // Call the function you're testing and set the result to a const
        const actual = didUserWin('rock', 'scissors');

        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual, expected);
    });

    test('compares userThrow to ComputerThrow and evaluates with Rock, Paper, Scissors rules', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const expected = 'user';
        
        //Act 
        // Call the function you're testing and set the result to a const
        const actual = didUserWin('scissors', 'paper');

        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual, expected);
    });

    test('compares userThrow to ComputerThrow and evaluates with Rock, Paper, Scissors rules', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const expected = 'user';
        
        //Act 
        // Call the function you're testing and set the result to a const
        const actual = didUserWin('paper', 'rock');

        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual, expected);
    });

    test('compares userThrow to ComputerThrow and evaluates with Rock, Paper, Scissors rules', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const expected = 'draw';
        
        //Act 
        // Call the function you're testing and set the result to a const
        const actual = didUserWin('paper', 'paper');

        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual, expected);
    });

    test('compares userThrow to ComputerThrow and evaluates with Rock, Paper, Scissors rules', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const expected = 'computer';
        
        //Act 
        // Call the function you're testing and set the result to a const
        const actual = didUserWin('rock', 'paper');

        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual, expected);
    });

// getRandomThrow tests

test('returns 1, 2, or 3 and converts to a corresponding rock, paper, or scissors string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let computerChoice = 1;
    const actual = getRandomThrow(computerChoice);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns 1, 2, or 3 and converts to a corresponding rock, paper, or scissors string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let computerChoice = 2;
    const actual = getRandomThrow(computerChoice);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns 1, 2, or 3 and converts to a corresponding rock, paper, or scissors string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let computerChoice = 3;
    const actual = getRandomThrow(computerChoice);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});