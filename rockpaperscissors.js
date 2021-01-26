
function capitalise(input) {
  let lowerCase = input.toLowerCase();
  let firstLetter = lowerCase.charAt(0);
  return firstLetter.toUpperCase() + lowerCase.slice(1,);
}

function randomise(max) {
  return Math.floor(Math.random() * max) + 1;
}

function computerPlay() {
  switch (randomise(3)) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

let playerScore = 0;
let computerScore = 0;

const output = document.querySelector("#output");
const score = document.querySelector("#score");
const btnhold = document.querySelector("#buttonhold")

function createOutput(text) {
  output.removeChild(output.lastChild);
  const para = document.createElement("p");
  para.textContent = text;
  output.appendChild(para);
}

function createScore(text) {
  score.removeChild(score.lastChild);
  const para = document.createElement("p");
  para.textContent = text;
  score.appendChild(para);
}

const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener("click", function () {
  let computerSelection = computerPlay();
  playRound(rockbtn.id, computerSelection);
}
);

const scibtn = document.querySelector("#scissors");
scibtn.addEventListener("click", function () {
  let computerSelection = computerPlay();
  playRound(scibtn.id, computerSelection);
}
);

const paperbtn = document.querySelector("#paper");
paperbtn.addEventListener("click", function () {
  let computerSelection = computerPlay();
  playRound(paperbtn.id, computerSelection);
}
);

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalise(playerSelection);

  if (playerSelection === computerSelection) {
    createOutput(`You Drew! ... You and the Computer both selected ${playerSelection}.`);
  } else if (playerSelection == "Rock" && computerSelection === "Scissors" ||
    playerSelection == "Scissors" && computerSelection === "Paper" ||
    playerSelection == "Paper" && computerSelection === "Rock") {
    playerScore += 1;
    createOutput(`You Win! ... ${playerSelection} beats ${computerSelection}.`);
  } else {
    computerScore += 1;
    createOutput(`You Lose! ... ${computerSelection} beats ${playerSelection}.`);
  }
  createScore(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);

  if (computerScore === 5) {
    createScore(`You lose overall to a stupid Computer! ${playerScore} - ${computerScore}`)
    btnhold.remove();
  } else if (playerScore === 5) {
    createScore(`You win overall. Congratulations ${playerScore} - ${computerScore}`)
    btnhold.remove();
  }

}






// function game() {
//   for (let i = 1; i <= 5; i++) {
//     const computerSelection = computerPlay();
//     let playerSelection = this.id;
//     console.log(playRound(playerSelection, computerSelection)) 
//     console.log(`Player: ${playerScore} Computer ${computerScore}`)
//   }
//   if (playerScore > computerScore) {
//     console.log(`You win overall ${playerScore} - ${computerScore}`);
//   } else if (computerScore > playerScore) {
//     console.log(`You lose overall ${playerScore} - ${computerScore}`);
//   } else {
//     console.log("You and the Computer drew overall!")
//   }
// }





