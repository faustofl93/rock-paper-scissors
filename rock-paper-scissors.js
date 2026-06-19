let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoice = "";
  let random;
  do {
    random = Math.floor(Math.random() * 10 + 1);
    switch (random) {
      case 1:
        compChoice = "rock";
        break;
      case 2:
        compChoice = "paper";
        break;
      case 3:
        compChoice = "scissors";
        break;
    }
  } while (random > 3);
  return compChoice;
}

function getHumanChoice() {
  const usersChocie = prompt("Enter your choice:");
  return usersChocie;
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();

  switch (humanChoice) {
    case "paper":
      if (computerChoice === "rock") {
        //console.log("You win! Paper covers rock.");
        humanScore++;
        return 1;
      } else {
        //console.log("You lose! Scissors cut paper.");
        computerScore++;
        return 0;
      }
    case "scissors":
      if (computerChoice === "rock") {
        //console.log("You lose! Rock breaks scissors.");
        computerScore++;
        return 0;
      } else {
        //console.log("You win! Scissors cut paper.");
        humanScore++;
        return 1;
      }
    case "rock":
      if (computerChoice === "scissors") {
        //console.log("You win! Rock break scissors.");
        humanScore++;
        return 1;
      } else {
        //console.log("You lose! Paper covers Rock");
        computerScore++;
        return 0;
      }
  }
}

function playGame() {
  let result = 0;
  let round = 0;
  let humanChoice = "";
  let computerChoice = "";

  while (round < 5 && computerScore != 3 && humanScore != 3) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    while (computerChoice === humanChoice) {
      alert("Can't pick same value.");
      computerChoice = getComputerChoice();
      humanChoice = getHumanChoice();
    }
    result = playRound(humanChoice, computerChoice)
      ? console.log(`User won round ${round + 1}.`)
      : console.log(`Computer won round ${round + 1}.`);
    round++;
  }
  humanScore > computerScore
    ? console.log("Congratulations!!! You won the game.")
    : console.log("Youy lose!!! Better luck next time");
}

//console.log(computerChoice);
alert("Welcome to the rock paper scissors game. Have fun!");
playGame();
