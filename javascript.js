// getComputerChoice should return randomly: rock, paper or scissors.
// it gives random number between 1 to 3
// first number prints rock, second paper, third scissors. 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {return 'rock'}
    else if (randomNumber === 2) {return 'paper'}
    else {return "scissors"}
}

function getHumanChoice(){
    let getAnswer = prompt('Rock, paper or scissors?', '').toLowerCase();
    if (getAnswer == "rock") {return 'rock'}
    else if (getAnswer == "paper") {return 'paper'}
    else if (getAnswer == "scissors") {return 'scissors'}
    else alert('Please write rock, paper, or scissors.')
    }

let computerScore = 0;
let humanScore = 0;

// a function takes the human and computer player choices as arguments
// plays a single round
// increments the round winner’s score
// logs a winner announcement
// humanChoice input case-insensitive
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log('Draw! You both chose rock.');
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats rock.');
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors.')
    }
    else if (humanChoice =='paper' && computerChoice =='rock') {
        console.log('You win! Paper beats rock.')
    }
    else if (humanChoice =='paper' && computerChoice =='paper') {
        console.log('Draw! You both chose paper.')
    }
    else if (humanChoice =='paper' && computerChoice =='scissors') {
        console.log('You lose! Scissors beats paper.')
    }
    else if (humanChoice =='scissors' && computerChoice =='rock') {
        console.log('You lose! Rock beats scissors.')
    }
    else if (humanChoice =='scissors' && computerChoice =='paper') {
        console.log('You win! Scissors beats paper.')
    }
    else if (humanChoice =='scissors' && computerChoice =='scissors') {
        console.log('Draw! You both chose scissors.')
    }
    else console.log('Try Again');


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);