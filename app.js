"use strict";

/* click to start the quiz - two choices for how to do this - remove and insert diff elements (seems messy!) or 
you can hide the questions and then unhide them to progress which is what I've chosen.
*/
var correctCount = 0;
var	incorrectCount = 0;
var answers = {
	bui : 'yellow',
	donn : 'brown',
	dearg : 'red',
	ban : 'white',
	glas : 'green',
};

function progress () {
	$('.inlineResults').html('You have answered ' + correctCount + ' questions right and ' + incorrectCount + ' questions wrong so far.');
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
	event.preventDefault();
	var userAnswer = $('#question1 :input:checked').val();
	if ( userAnswer ==  answers['bui']) {
	 alert('You got it right!');
	 correctCount++}
	else { 
		alert('Sorry, that is not correct. The correct answer is yellow.');
		incorrectCount++}
	progress ();
	$('#question1').detach();
	$('#question2').toggle();

}
);


//Dearg
$('#continue2').click(function(){
	event.preventDefault();
	var userAnswer = $('#question2 :input:checked').val();
	if ( userAnswer == answers['donn']) {
		alert('You got it right!');
		correctCount++}
	else { alert('Sorry, that is not correct. The correct answer is brown.');
			incorrectCount++}
	progress ();
	$('#question2').detach();
	$('#question3').toggle();
}
);


//Ban
$('#continue3').click(function(){
	event.preventDefault();
	var userAnswer = $('#question3 :input:checked').val();
	if ( userAnswer == answers['dearg']) {
		alert('You got it right!');
		correctCount++}
	else { alert('Sorry, that is not correct. The correct answer is red.'); incorrectCount++}
	progress ();
	$('#question3').detach();
	$('#question4').toggle();
}
);


//Glas
$('#continue4').click(function(){
	event.preventDefault();
	var userAnswer = $('#question4 :input:checked').val();
	if ( userAnswer == answers['ban']) {
		alert('You got it right!');
		correctCount++}
	else { alert('Sorry, that is not correct. The correct answer is white.'); 
	incorrectCount++}
	progress ();
	$('#question4').detach();
	$('#question5').toggle();
}
);


//This is the results page - ref http://www.omniglot.com/language/colours/irish.php
$('#continue5').click(function(){
	event.preventDefault();
	var userAnswer = $('#question5 :input:checked').val();
	if ( userAnswer == answers['glas']) {
		alert('You got it right!');
		correctCount++}
	else {
		alert('Sorry, that is not correct. The correct answer is green.');
		incorrectCount++}
	$('#question5').detach();
	$('#correct').html("You got " + correctCount + " colors right!")
	$('#incorrect').html("You got " + incorrectCount + " colors wrong!")
	$('#results').toggle();
});

$('#restart').click(function (){
	location.reload();
});

