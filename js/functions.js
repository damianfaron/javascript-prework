function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} else {
		return 'poza zakresem';
	}
}

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

// show result

function updateResult() {
	playerPoints.innerText = playerWins;
	computerPoints.innerText = computerWins;
}
console.log('działa');
function clearResult() {
	playerWins = 0;
	computerWins = 0;
	// console.log('reset player wins:', playerWins, 'computer wins:', computerWins);
	updateResult();

}
// game
function displayResult(argPlayerMove, argComputerMove) {
	if (
		(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
	) {
		printMessage('Wygrałeś');
		// add one points to player
		playerWins++;
	} else if (
		(argPlayerMove == 'kamień' && argComputerMove == 'papier') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'papier' && argComputerMove == 'nożyce')
	) {
		printMessage('Przegrałeś');
		// add one points to computer
		computerWins++;
	} else if (argPlayerMove == argComputerMove) {
		printMessage('REMIS !');
	}
	updateResult();
}
