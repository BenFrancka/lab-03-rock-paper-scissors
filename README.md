## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML
    - Radio Buttons for Rock, Paper and Scissors
    - 2 divs
        - one for total win/loss/draw display
        - one for the results of each game (human or computer won?)
    - button to play a round
        - run event listener on click

## Initialize State
    - Wins: 0
    - Losses: 0
    - Draws: 0
    - Computer choice: rock | paper | scissors

## Events
    -   On button click:
        - throw a round to get computer choice
            - change computer choice state
        - get user choice from radio button
        - compare usuer choice to computer choice
        - update state:
            - update wins/losses/draws
        - present results of round and total wins/losses/draws

## rockPaperScissors funciton
    - will need to compare (userThrow, computerThrow)
        - userThrow === rock && computerThrow === scissors
        - userThrow === scissors && computerThrow === paper
        - userThrow === paper &&& computerThrow === rock
            - return: win

        - else: userThrow === computerThrow 
            - return: draw
        
        - else 
            - return: loss

## getRandomThrow function
    - place in get-random-throw.js
    - Math.ceil(Math.random() * 3);
        - if === 1, return: 'rock'
        - if === 2, return: 'paper'
        - if === 3, return: 'scissors'
