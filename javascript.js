// getComputerChoice should return randomly: rock, paper or scissors.
// it gives random number between 1 to 3
// first number prints rock, second paper, third scissors. 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {return 'rock'}
    else if (randomNumber === 2) {return 'paper'}
    else if (randomNumber === 3){return "scissors"}
}

function getHumanChoice(){
let getAnswer; // = prompt('Rock, paper or scissors?', '').toLowerCase();
    if (getAnswer == "rock") {return 'rock'}
    else if (getAnswer == "paper") {return 'paper'}
    else if (getAnswer == "scissors") {return 'scissors'}
    }
    
let computerScore = 0;
let humanScore = 0;
let result;

// a function takes the human and computer player choices as arguments
// plays a single round
// increments the round winner’s score
// logs a winner announcemeplayRound(rock.id, computerChoice)nt
// humanChoice input case-insensitive
const showResult = document.querySelector("#showResult");
function playRound(humanChoice, computerChoice) {
    result = [];
    if (humanChoice == 'rock' && computerChoice == 'rock') {
        showResult.textContent = `Draw! You both chose rock.`
        result.push("draw");
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        showResult.textContent = `You lose! Paper beats rock.`
        result.push("lose");
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        showResult.textContent = `You win! Rock beats scissors.`
        result.push("win");
    }
    else if (humanChoice =='paper' && computerChoice =='rock') {
        showResult.textContent = `You win! Paper beats rock.`
        result = "win";
    }
    else if (humanChoice =='paper' && computerChoice =='paper') {
        showResult.textContent = `Draw! You both chose paper.`
        result = "draw";
    }
    else if (humanChoice =='paper' && computerChoice =='scissors') {
        showResult.textContent = `You lose! Scissors beats paper.`
        result = "lose";
    }
    else if (humanChoice =='scissors' && computerChoice =='rock') {
        showResult.textContent = `You lose! Rock beats scissors.`
        result = "lose";
    }
    else if (humanChoice =='scissors' && computerChoice =='paper') {
        showResult.textContent = `You win! Scissors beats paper.`
        result = "win";
    }
    else if (humanChoice =='scissors' && computerChoice =='scissors') {
        showResult.textContent = `Draw! You both chose scissors.`
        result = "draw";
    }

    if (result == "win") {humanScore++;} 
        else if (result == "lose") {computerScore++;}
        else if (result == "draw"){humanScore++; computerScore++;}
    return (result); 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

/* 
when humanScore + computerScore = 5
announce the winner
*/
const rps = document.querySelectorAll(".rps");
const scoreTable = document.querySelector("#scoreTable");

const rpsPlay = rps.forEach(button => {
    button.addEventListener("click", e => {
    playRound(e.target.id, getComputerChoice())

    scoreTable.textContent = `You: ${humanScore}, Opponent: ${computerScore} `

    if (computerScore + humanScore >= 5) {
        if (humanScore > computerScore) {
            showResult.textContent = "Winner! Want to play another game?"}
        else if (computerScore > humanScore) {
            showResult.textContent = "You lost the game! Want to try again?"}
        else if (computerScore == humanScore) {
            showResult.textContent = "Draw! Choose rock, paper, or scissors to play again." 
        }
    computerScore = 0;
    humanScore = 0;
}
    });
});
