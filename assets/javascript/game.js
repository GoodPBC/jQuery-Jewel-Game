
$(document).ready(function(){
	
//=========================  global variables  ================================


var numToWin = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(numToWin);


var squareBlue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var diamondWhite = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var ovalYellow = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var ovalRed = Math.floor(Math.random() * (12 - 1 + 1) + 1);

var hopeAudio = document.createElement('audio');
hopeAudio.setAttribute('src', 'assets/images/cartoonBazinga.wav');

var desireAudio = document.createElement('audio');
desireAudio.setAttribute('src', 'assets/images/cartoonBoing.wav');

var peaceAudio = document.createElement('audio');
peaceAudio.setAttribute('src', 'assets/images/cartoonZing.wav');

var passionAudio = document.createElement('audio');
passionAudio.setAttribute('src', 'assets/images/cartoonBop.wav');

var winAudio = document.createElement('audio');
winAudio.setAttribute('src', 'assets/images/cheering.wav');

var lossAudio = document.createElement('audio');
lossAudio.setAttribute('src', 'assets/images/Boo.wav');



//===========GAME COUNTERS
var guessTotal= 0;
var gameWins = 0;
var gameLosses = 0;
//=========================  MAIN PROCESS  ====================================
//An HTML event that populates the random number chosen by the computer to the appropriate div
$("#computerScore").html(numToWin);

$("#jewelHope").on("click", function() {
	scoreKeep(squareBlue);
	$('#jewelHope').addClass("animated shake").one('webkitAnimationEnd animationend', 
		function () {
			$(this).removeClass('animated shake');  
		});
	hopeAudio.play();
});

$("#jewelDesire").on("click", function() {
	scoreKeep(diamondWhite);

	$('#jewelDesire').addClass("animated shake").one('webkitAnimationEnd animationend', 
		function () {
			$(this).removeClass('animated shake');  
		});
	desireAudio.play();
});

$("#jewelPeace").on("click", function() {
	scoreKeep(ovalYellow);
	$('#jewelPeace').addClass("animated shake").one('webkitAnimationEnd animationend', 
		function () {
			$(this).removeClass('animated shake');  
		});
		peaceAudio.play();
});

$("#jewelPassion").on("click", function() {
	scoreKeep(ovalRed);
	$('#jewelPassion').addClass("animated shake").one('webkitAnimationEnd animationend', 
		function () {
			$(this).removeClass('animated shake');  
		});
		passionAudio.play();	
});

//=========================  functions  ========================================
function scoreKeep (jewel) {
	console.log( guessTotal);
	guessTotal+= jewel;

	$("#playerScore").html(guessTotal);

	$("#playerscore").empty();
	$("#playerscore").append(guessTotal);

		if (guessTotal > numToWin) {

			gameLosses++;
			alert('You lost. You should try again.');
			$("#gamesLost").html(gameLosses++);
		lossAudio.play();
		reset();
		}else if (guessTotal === numToWin) { 
			gameWins++;
			alert("Congratulations! You matched the wizard");
			$("#gamesWon").html(gameWins++);
		winAudio.play();
		reset();	
		}
}
// this function resets the game to its intial state
function reset () {
	numToWin = Math.floor(Math.random() * (120 - 19 + 1) + 19);

	$("#computerScore").html(numToWin);

	squareBlue = Math.floor((Math.random() * 12) + 1);
    diamondWhite = Math.floor((Math.random() * 12) + 1);
    ovalYellow = Math.floor((Math.random() * 12) + 1);
    ovalRed = Math.floor((Math.random() * 12) + 1);
    guessTotal = 0;

    $("#playerScore").html(guessTotal);
    console.log(squareBlue, diamondWhite, ovalYellow, ovalRed);
    console.log(numToWin);
}
//


//=================================================================
//Inititates the code for the first time


}); //$(document).ready(function()