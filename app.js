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
	bandearg : 'pink',
	gorm : 'blue',
	corcra : 'purple',
	dubh : 'black',
	liath : 'grey'

};

//what are my keys here? Question : color? or should it be bui : "Question x of y: What does Bui mean?"
var questions = {
bui : 'Question 1 of 10: What color is Bui?',
donn : 'Question 2 of 10: What color is Donn?',
dearg : 'Question 3 of 10: What color is Dearg?',
ban : 'Question 4 of 10: What color is Ban?',
glas : 'Question 5 of 10: What color is Glas?',
bandearg : 'Question 6 of 10: What color is Bandearg?',
gorm : 'Question 7 of 10: What color is Gorm?',
corcra : 'Question 8 of 10: What color is Corcra?',
dubh : 'Question 9 of 10: What color is Dubh?',
liath :	'Question 10 of 10: What color is Liath?<'
};


var colorChoices = {
bui1 : '',
donn : '',
dearg : '',
ban : '',
glas : '',
bandearg : '',
gorm : '',
corcra : '',
dubh : '',
liath :	''
};


//From here on I haven't modified. Plan is to loop through each object and 'construct' each question

$('#start').click(function () {
	$('#intro').hide();
	$('#question1').toggle();

});
 /*Skeleton form at all time and then just change content. Currently loading form after JS is loaded.
 base form that checks if its right and updates the form
 class to right answer or current answers in a state and checked against that state.
 Container - word. Wrong Answers. Right Answer. And Function to update form based on that data system.
 */


//Displays Donn question
$('#continue1').click(function(){
	var userAnswer = $('#question1 :input').val();
	if ( userAnswer == answers['bui']) {correctCount++

	}
	else { incorrectCount++}

	$('#question1').detach();
	$('#question2').toggle();

}
);


//Displays Dearg
$('#continue2').click(function(){
	var userAnswer = $('#question2 :input');
	if ( userAnswer == answers['donn']) {++correctCount}
	else { incorrectCount++}
	$('#question2').detach();
	$('#question3').toggle();
}
);


//Displays Ban
$('#continue3').click(function(){
	currentAnswer = 'red';
	var userAnswer = $('#question3 :input');
	if ( userAnswer == answers['dearg']) {++correctCount}
	else { incorrectCount++}
	$('#question3').detach();
	$('#question4').toggle();
}
);


//Displays Glas
$('#continue4').click(function(){
	var userAnswer = $('#question4 :input');
	if ( userAnswer == answers['ban']) {++correctCount}
	else { incorrectCount++}
	$('#question4').detach();
	$('#question5').toggle();
}
);



//Displays Bandearg
$('#continue5').click(function(){
	currentAnswer = 'green';
	var userAnswer = $('#question5 :input');
	if ( userAnswer == answers['glas']) {++correctCount}
	else { incorrectCount++}
	$('#question5').detach();
	$('#question6').toggle();
}
);



//Displays Gorm
$('#continue6').click(function(){
	var userAnswer = $('#question6 :input');
	if ( userAnswer == answers['bandearg']) {++correctCount}
	else { incorrectCount++}
	$('#question6').detach();
	$('#question7').toggle();
}
);



//Displays Corcra
$('#continue7').click(function(){
	var userAnswer = $('#question7 :input');
	if ( userAnswer == answers['gorm']) {++correctCount}
	else { incorrectCount++}
	$('#question7').detach();
	$('#question8').toggle();
}
);


//Dubh
$('#continue8').click(function(){
	var userAnswer = $('#question8 :input');
	if ( userAnswer == answers['corcra']) {++correctCount}
	else { incorrectCount++}
	$('#question8').detach();
	$('#question9').toggle();
}
);



$('#continue9').click(function(){
	var userAnswer = $('#question9 :input');
	if ( userAnswer == answers['dubh']) {++correctCount}
	else { incorrectCount++}
	$('#question9').detach();
	$('#question10').toggle();
});


//This is the results page - ref http://www.omniglot.com/language/colours/irish.php
$('#continue10').click(function(){
	var userAnswer = $('#question10 :input');
	if ( userAnswer == answers['liath']) {++correctCount}
	else { incorrectCount++}
	$('#question10').detach();
	$('#correct').html("You got " + correctCount + " colors right!")
	$('#incorrect').html("You got " + incorrectCount + " colors wrong!")
	$('#results').toggle();
});

