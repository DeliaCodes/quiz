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

//To Do
//add feedback div
// get styling a bit better

function createQuestion () {
$('#question').html(questions[whichQuestion[currentQuestion]]);
	
	$('input').each(function (index){
		var inputArray = colorChoices[whichQuestion[currentQuestion]][index];
		$(this).val(colorChoices[whichQuestion[currentQuestion]][index]);
	});
	
	$('.choices').each(function(index){
	var inputArray = colorChoices[whichQuestion[currentQuestion]][index];
	var needsWhiteText = ['green','brown','black','red','purple','blue'];
	  $('.text',this).html(inputArray);
	  $(this).css("background-color", inputArray);
	  $(this).removeClass('white');
	  if (needsWhiteText.includes(inputArray)) {$(this).addClass('white')};
	  });
};

function checkAnswer (){
	var userAnswer = $('#updateMe :input:checked').val();
	if (userAnswer == answers[whichQuestion[currentQuestion]]) {correctCount++}
	else {incorrectCount++};
	
};

$('#start').click(function () {
	$('#intro').detach();
	createQuestion();
	$('#updateMe').toggle();
});

$('#updateSubmitButton').click( function (){
	event.preventDefault();
	checkAnswer();
	currentQuestion++;
	if (currentQuestion>9) {resultsTally();} else {createQuestion();};
	});


function resultsTally (){
	$('#updateMe').detach();
	$('#correct').html("You got " + correctCount + " colors right!")
	$('#incorrect').html("You got " + incorrectCount + " colors wrong!")
	$('#results').toggle();
};

$('#restart').click(function (){
	location.reload();
});

