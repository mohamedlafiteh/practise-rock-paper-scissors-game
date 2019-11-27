let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result >p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function computerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converterToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML =
    converterToWord(user) +
    " beats " +
    converterToWord(computer) +
    ". You won!";
}

function lose(user, computer) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML =
    converterToWord(user) +
    " loses to  " +
    converterToWord(computer) +
    ". You lost!";
}

function draw(user, computer) {
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML =
    converterToWord(user) +
    " equal " +
    converterToWord(computer) +
    ". It is draw!";
}

function game(userChoice) {
  const computerChoices = computerChoice();
  switch (userChoice + computerChoices) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoices);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoices);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoices);
      break;
  }
}

function main() {
  rockDiv.addEventListener("click", () => {
    game("r");
  });
  paperDiv.addEventListener("click", () => {
    game("p");
  });
  scissorsDiv.addEventListener("click", () => {
    game("s");
  });
}
main();
