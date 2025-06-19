let computerMove;
let playerMove;
let randomNumber;
let playerInput;

// computer
computerMove = randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);

// player
playerMove = playerInput;
playerInput = prompt('Wybier swój ruch! 1: Kamineń, 2: Papier, 3: nożyce');

console.log('Wylosowana liczba to ' + randomNumber);
if (randomNumber == '1') {
	computerMove = 'Kamień';
} else if (randomNumber == '2') {
	computerMove = 'Papier';
} else if (randomNumber == '3') {
	computerMove = 'Nożyce';
}

console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
	playerMove = 'Kamień';
} else if ((playerInput = '2')) {
	playerMove = 'Papier';
} else if ((playerInput = '3')) {
	playerMove = 'Nożyce';
}

printMessage('mój ruch: ' + computerMove);
printMessage(
	'Zagrałem ' +
		computerMove +
		'! Jeśli Twój ruch to ' +
		playerMove +
		', to wygrasz!'
);
