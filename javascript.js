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
        result = "draw";
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats rock.');
        result = "lose";
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors.')
        result = "win";
    }
    else if (humanChoice =='paper' && computerChoice =='rock') {
        console.log('You win! Paper beats rock.')
        result = "win";
    }
    else if (humanChoice =='paper' && computerChoice =='paper') {
        console.log('Draw! You both chose paper.')
        result = "draw";
    }
    else if (humanChoice =='paper' && computerChoice =='scissors') {
        console.log('You lose! Scissors beats paper.')
        result = "lose";
    }
    else if (humanChoice =='scissors' && computerChoice =='rock') {
        console.log('You lose! Rock beats scissors.')
        result = "lose";
    }
    else if (humanChoice =='scissors' && computerChoice =='paper') {
        console.log('You win! Scissors beats paper.')
        result = "win";
    }
    else if (humanChoice =='scissors' && computerChoice =='scissors') {
        console.log('Draw! You both chose scissors.')
        result = "draw";
    }
    else console.log('Try Again');

    if (result == "win") {humanScore++; alert('You win the round!')} 
        else if (result == "lose") {computerScore++;alert('You lose the round!')}
        else if (result == "draw"){humanScore++; computerScore++; alert('Draw round!')}
    return (result);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



// play 5 round
// track score
// declares the winner at the end
function playGame() {
    // round one
    playRound(humanSelection, computerSelection);
    console.log("You: " + humanScore + " Opponent: " + computerScore);
    // round two
    playRound(getHumanChoice(), getComputerChoice());
    console.log("You: " + humanScore + " Opponent: " + computerScore);
    // round three
    playRound(getHumanChoice(), getComputerChoice());
    console.log("You: " + humanScore + " Opponent: " + computerScore);
    // round four
    playRound(getHumanChoice(), getComputerChoice());
    console.log("You: " + humanScore + " Opponent: " + computerScore);
    // round five
    playRound(getHumanChoice(), getComputerChoice());
    console.log("You: " + humanScore + " Opponent: " + computerScore);
    if (humanScore > computerScore) {
        alert("You win!");
        console.log("You win the game!")}
        else if (humanScore < computerScore) {
            alert("You lose!")
            console.log("You lose the game!")}
        else if (humanScore == computerScore){
            alert("Draw!")
            console.log("Draw game!")}
}
playGame();