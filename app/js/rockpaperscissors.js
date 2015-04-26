////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput() ;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    //keep it honest
    console.log('You chose ' + playerMove);
    console.log('Computer choose '+ computerMove);

    if (playerMove === computerMove) {
        return 'you tied!';
    } else if (playerMove === 'rock') {
            if (computerMove === 'scissors') {
                return 'player wins'; //with rock
            } else {return 'computer wins';} //with paper
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
                return 'player wins'; //with paper
            } else {return 'computer wins';} //with
    } else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
                return 'player wins'; //with scissors
            } else {return 'computer wins';} //with rock
    } else {return "error: playerMove variable has an unexpected value of: " + playerMove;}


    return "error with getWinner";
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var result = getWinner(getPlayerMove(),getComputerMove());
        switch (result) {
            case "you tied!":
                console.log(result + "\nYou have " + playerWins + " wins, and the computer has " + computerWins);
                break;
            case "player wins":
                playerWins = playerWins + 1;
                console.log(result + "\nYou have " + playerWins + " wins, and the computer has " + computerWins); 
                break;
            case "computer wins":
                computerWins = computerWins + 1; 
                console.log(result + "\nYou have " + playerWins + " wins, and the computer has " + computerWins);
                break;
        }
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < x && computerWins < x) {
        var result = getWinner(getPlayerMove(),getComputerMove());
        switch (result) {
            case "you tied!":
                console.log(result + "\nYou have " + playerWins + " wins, and the computer has " + computerWins);
                break;
            case "player wins":
                playerWins = playerWins + 1;
                console.log(result + "\nYou have " + playerWins + " wins, and the computer has " + computerWins); 
                break;
            case "computer wins":
                computerWins = computerWins + 1; 
                console.log(result + "\nYou have " + playerWins + " wins, and the computer has " + computerWins);
                break;
        }
    }
    return [playerWins, computerWins];
}
