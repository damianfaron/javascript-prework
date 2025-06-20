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
		
		return 'poza zakresem';
	}
}

function displayResult(argPlayerMove, argComputerMove) {
	if (
		(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
	) {
		printMessage('Wygrałeś');
	} else if (
		(argPlayerMove == 'kamień' && argComputerMove == 'papier') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'papier' && argComputerMove == 'nożyce')
	) {
		printMessage('Przegrałeś');
	} else if (argPlayerMove == argComputerMove) {
		printMessage('REMIS !');
	}
}
