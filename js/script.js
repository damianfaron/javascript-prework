let computerMove;
let playerMove;
let randomNumber;
// let playerInput;
// let argMoveId;
let argPlayerMove;
let argComputerMove;
let buttonRock, buttonPaper, buttonScissors;
let playerWins = 0;
let computerWins = 0;

// add elements to JS
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

// result
const playerPoints = document.getElementById('player-wins');
const computerPoints = document.getElementById('computer-wins');
const btnClearPoints = document.getElementById('button-clear');

// function game

// add event for the buttons
buttonPaper.addEventListener('click', function () {
	buttonClicked('papier');
});
buttonRock.addEventListener('click', function () {
	buttonClicked('kamień');
});
buttonScissors.addEventListener('click', function () {
	buttonClicked('nożyce');
});

btnClearPoints.addEventListener('click', clearResult);
