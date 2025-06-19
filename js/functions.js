function printMessage(msg) {
	var div = document.createElement('div');
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
		printMessage('Podaj ruch z zakresu 1-3');
		return 'poza zakresem';
	}
}

function displayResult(argPlayerMove, argComputerMove) {
	if (
		(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
	) {
		printMessage('Wygrał gracz');
	} else if (
		(argPlayerMove == 'kamień' && argComputerMove == 'papier') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'paiper' && argComputerMove == 'nożyce')
	) {
		printMessage('Przegrał gracz');
	} else if (argPlayerMove == argComputerMove) {
		printMessage('remis');
	}
}
