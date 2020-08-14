let h3 = $('#header-3');
let h1 = $('#header-1');

let column1 = $('.col1');
let column2 = $('.col2');
let column3 = $('.col3');
let row1 = $('.row1');
let row2 = $('.row2');
let row3 = $('.row3');
let diag1 = $('.diag1');
let diag2 = $('.diag2');
let squareClass = $('.square');
let currentMove = 'X';
let resetBoard = $('#reset-board');
let gameOver = false;


squareClass.click(function(){
	if ($(this).text() == '' && !gameOver){
		$(this).text(currentMove);
		postMoveProcessing();	
	}
});

resetBoard.click(function(){
	squareClass.text('');
	currentMove = 'X';
	h3.text('X goes first...');
	$('.winner-alert').remove();
	gameOver = false;
});

function postMoveProcessing(){
		checkForWinner();
		currentMove = flipXorO(currentMove);
		changeHeader();
}

function changeHeader(){
	h3.text(currentMove + " it's your turn.");
}

function checkForWinner(){
	if(column1.text() == currentMove + currentMove + currentMove ||
		column2.text() == currentMove + currentMove + currentMove ||
		column3.text() == currentMove + currentMove + currentMove ||
		row1.text() == currentMove + currentMove + currentMove ||
		row2.text() == currentMove + currentMove + currentMove ||
		row3.text() == currentMove + currentMove + currentMove ||
		diag1.text() == currentMove + currentMove + currentMove ||
		diag2.text() == currentMove + currentMove + currentMove){
			gameOver = true;
			announceWinner();
		}
	else if(column1.text().length == 3 && 
			column2.text().length == 3 &&
			column3.text().length == 3){
		gameOver = true;
		announceTie();	
	}
}
function announceTie(){
	h1.after('<div class="alert winner-alert alert-primary" role="alert"> Tie Game!</div>');
}
function announceWinner(){
	h1.after('<div class="alert winner-alert alert-primary" role="alert">' 
		+ currentMove + ' wins the Game!</div>');
}
function flipXorO(currentMove){
	if (currentMove == 'X'){
		return 'O';
	}
	else {
		return 'X';
	}
 }
