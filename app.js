"use strict";

/* three objects - answers, questions, choices
one array to access those objects
*/

var correctCount = 0;
var	incorrectCount = 0;
var currentQuestion = 0;
var whichQuestion = ['bui','donn','dearg','ban','glas','bandearg','gorm','corcra','dubh','liath'];
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
liath :	'Question 10 of 10: What color is Liath?'
};


var colorChoices = {
bui : ['yellow', 'green', 'blue', 'grey'],
donn : ['black','yellow','blue','brown'],
dearg : ['black','green','red','white'],
ban : ['brown','white','grey','black'],
glas : ['blue','purple','red','green'],
bandearg : ['pink','white','red','grey'],
gorm : ['green','blue','pink','grey'],
corcra : ['black','blue','yellow','purple'],
dubh : ['grey','black','green','red'],
liath :	['brown','white','grey','black']
};



/*uses the objects above to create the current question by udating the form with:
1) the question being asked.
2) which answers to offer as choices
3) makes text white for dark color choices.	
*/
function createQuestion () {
$('#question').html(questions[whichQuestion[currentQuestion]]);
	$('input').each(function (index){
		var inputArray = colorChoices[whichQuestion[currentQuestion]][index];
		$(this).val(colorChoices[whichQuestion[currentQuestion]][index]);

	});
	
	$('.choices').each(function(index){
	var inputArray = colorChoices[whichQuestion[currentQuestion]][index];
	var needsWhiteText = ['green','brown','black','red','purple','blue','grey'];
	  $('.text',this).html(inputArray);
	  $(this).css("background-color", inputArray);
	  $(this).removeClass('white');
	  if (needsWhiteText.includes(inputArray)) {$(this).addClass('white')};
	  });
};


//checks the answer to see if it is right or not. Increments the appropriate count.
function checkAnswer (){
	var userAnswer = $('#updateMe :input:checked').val();
	if (userAnswer == answers[whichQuestion[currentQuestion]]) {correctCount++}
	else {incorrectCount++};
	
};

/*inserts feedback (current right/wrong count, if the last answer was right) into the feedback div
hides the question form, shows the feedback div
*/
function giveFeedback () {
	
	var userAnswer = $('#updateMe :input:checked').val();
	if (userAnswer == answers[whichQuestion[currentQuestion]]) 
		{$('#lastAnswer').html('Great job! Your last answer, '  + userAnswer + ' was correct.')}
	else {$('#lastAnswer').html("I'm sorry. Your last answer,  " + userAnswer + ' was incorrect.')};
	updateTotals ();
	$('#updateMe').hide()
	$('#feedback').show();
}

//hides the feedback page, clears the radio button input, shows the next question.
$('#continue').click( function (){
	$('#updateMe :input:checked').prop('checked',false);
	$('#feedback').hide();
	$('#updateMe').show();
	});

//starts the quiz
$('#start').click(function () {
	$('#intro').detach();
	createQuestion();
	$('#updateMe').show();
});

//this is what happens when you answer a question
$('#updateSubmitButton').click( function (){
	event.preventDefault();
	checkAnswer();
	giveFeedback();
	currentQuestion++;
	if (currentQuestion>9) {resultsTally();} else {createQuestion();};
	});

//updates user's correct and incorrect answer questions
function updateTotals (){
	$('.correct').html("You've gotten " + correctCount + " colors right!")
	$('.incorrect').html("You've gotten " + incorrectCount + " colors wrong!")
};

//this is the final results page of the quiz
function resultsTally (){
	$('#quiz').detach();
	updateTotals ();
	$('#results').toggle();
};

//this restarts the quiz if the user so chooses
$('#restart').click(function (){
	location.reload();
});

