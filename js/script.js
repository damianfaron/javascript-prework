let computerMove;
let playerMove;
let randomNumber;
// let playerInput;
// let argMoveId;
let argPlayerMove;
let argComputerMove;
let buttonRock, buttonPaper, buttonScissors;

// add elements to JS
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

// function game
function buttonClicked(argButtonName) {
	clearMessages();
	// console.log(argButtonName + ' kliknięto mnie');

	// computer move
	computerMove = randomNumber;
	randomNumber = Math.floor(Math.random() * 3 + 1);
	computerMove = getMoveName(randomNumber);

	// player move
	playerMove = argButtonName;

	// print info game:
	printMessage(
		'Wybór gracza to: ' + playerMove + ', wybór komputera to ' + computerMove
	);
	displayResult(playerMove, computerMove);
}

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
