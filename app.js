"use strict";

/* click to start the quiz - two choices for how to do this - remove and insert diff elements (seems messy!) or 
you can hide the questions and then unhide them to progress which is what I've chosen.
*/

// currentAnswer is checking against the input value
var currentAnswer = 'yellow';
var correctCount = 0;
var	incorrectCount = 0;

//

$('#start').click(function () {
	$('#intro').hide();
	$('#question1').toggle();});
 /*Skeleton form at all time and then just change content. Currently loading form after JS is loaded.
 base form that checks if its right and updates the form
 class to right answer or current answers in a state and checked against that state.
 Container - word. Wrong Answers. Right Answer. And Function to update form based on that data system.
 */

//currently broken - correct answer is yellow  
$('#question1').submit(function(){
	event.preventDefault();
	var userAnswer = $('#question1 :input').val();
	if ( userAnswer == currentAnswer) {correctCount++}
	else { incorrectCount++}
}
	);



//Donn question
$('#continue1').click(function(){
		$('#question1').detach();
	$('#question2').toggle();
}
);

$('#question2').submit(function(){
	event.preventDefault();
	currentAnswer = 'brown';
	var userAnswer = $('#question2 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//Dearg
$('#continue2').click(function(){
	$('#question2').detach();
	$('#question3').toggle();
}
);

$('#question3').submit(function(){
	event.preventDefault();
	currentAnswer = 'red';
	var userAnswer = $('#question3 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//Ban
$('#continue3').click(function(){
	$('#question3').detach();
	$('#question4').toggle();
}
);

$('#question4').submit(function(){
	event.preventDefault();
	currentAnswer = 'white';
	var userAnswer = $('#question4 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);
//Glas
$('#continue4').click(function(){
		$('#question4').detach();
	$('#question5').toggle();
}
);

$('#question5').submit(function(){
	event.preventDefault();
	currentAnswer = 'green';
	var userAnswer = $('#question5 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//Bandearg
$('#continue5').click(function(){
	$('#question5').detach();
	$('#question6').toggle();
}
);

$('#question6').submit(function(){
	event.preventDefault();
	currentAnswer = 'pink';
	var userAnswer = $('#question6 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//Gorm
$('#continue6').click(function(){
	$('#question6').detach();
	$('#question7').toggle();
}
);

$('#question7').submit(function(){
	event.preventDefault();
	currentAnswer = 'blue';
	var userAnswer = $('#question7 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//Corcra
$('#continue7').click(function(){
	$('#question7').detach();
	$('#question8').toggle();
}
);

$('#question8').submit(function(){
	event.preventDefault();
	currentAnswer = 'purple';
	var userAnswer = $('#question8 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//Dubh
$('#continue8').click(function(){
		$('#question8').detach();
	$('#question9').toggle();
}
);

$('#question9').submit(function(){
	event.preventDefault();
	currentAnswer = 'black';
	var userAnswer = $('#question9 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

$('#continue9').click(function(){
$('#question9').detach();
	$('#question10').toggle();
});

$('#question10').submit(function(){
	event.preventDefault();
	currentAnswer = 'grey';
	var userAnswer = $('#question10 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
}
	);

//This is the results page - ref http://www.omniglot.com/language/colours/irish.php
$('#continue10').click(function(){
	$('#question10').detach();
	$('#correct').html("You got " + correctCount + " colors right!")
	$('#incorrect').html("You got " + incorrectCount + " colors wrong!")
	$('#results').toggle();
});

