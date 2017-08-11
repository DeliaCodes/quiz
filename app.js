"use strict";

/* click to start the quiz - two choices for how to do this - remove and insert diff elements (seems messy!) or 
you can hide the questions and then unhide them to progress which is what I've chosen.
*/

// currentAnswer is checking against the input value
var currentAnswer = 'yellow';
var correctCount = 0;
var	incorrectCount = 0;
var answers = {
	bui : 'yellow',
	donn : 'brown',
	dearg : 'red',
	ban : 'white',
	glas : 'green',
	bandearg : 'pink',
	gorm : 'blue',
	corcra : 'purple',
	dubh : 'black',
	liath : 'grey'

};

//

$('#start').click(function () {
	$('#intro').hide();
	$('#question1').toggle();

});
 /*Skeleton form at all time and then just change content. Currently loading form after JS is loaded.
 base form that checks if its right and updates the form
 class to right answer or current answers in a state and checked against that state.
 Container - word. Wrong Answers. Right Answer. And Function to update form based on that data system.
 */


//Donn question
$('#continue1').click(function(){
	var userAnswer = $('#question1 :input').val();
	if ( userAnswer == currentAnswer) {correctCount++}
	else { incorrectCount++}

	$('#question1').detach();
	$('#question2').toggle();

}
);


//Dearg
$('#continue2').click(function(){
	currentAnswer = 'brown';
	var userAnswer = $('#question2 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question2').detach();
	$('#question3').toggle();
}
);


//Ban
$('#continue3').click(function(){
	currentAnswer = 'red';
	var userAnswer = $('#question3 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question3').detach();
	$('#question4').toggle();
}
);


//Glas
$('#continue4').click(function(){
	currentAnswer = 'white';
	var userAnswer = $('#question4 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question4').detach();
	$('#question5').toggle();
}
);



//Bandearg
$('#continue5').click(function(){
	currentAnswer = 'green';
	var userAnswer = $('#question5 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question5').detach();
	$('#question6').toggle();
}
);



//Gorm
$('#continue6').click(function(){
	currentAnswer = 'pink';
	var userAnswer = $('#question6 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question6').detach();
	$('#question7').toggle();
}
);



//Corcra
$('#continue7').click(function(){
	currentAnswer = 'blue';
	var userAnswer = $('#question7 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question7').detach();
	$('#question8').toggle();
}
);


//Dubh
$('#continue8').click(function(){
	currentAnswer = 'purple';
	var userAnswer = $('#question8 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question8').detach();
	$('#question9').toggle();
}
);



$('#continue9').click(function(){
		currentAnswer = 'black';
	var userAnswer = $('#question9 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question9').detach();
	$('#question10').toggle();
});


//This is the results page - ref http://www.omniglot.com/language/colours/irish.php
$('#continue10').click(function(){
	currentAnswer = 'grey';
	var userAnswer = $('#question10 :input');
	if ( userAnswer == currentAnswer) {++correctCount}
	else { incorrectCount++}
	$('#question10').detach();
	$('#correct').html("You got " + correctCount + " colors right!")
	$('#incorrect').html("You got " + incorrectCount + " colors wrong!")
	$('#results').toggle();
});

