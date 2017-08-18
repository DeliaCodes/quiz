"use strict";

/* three objects - answers, questions, choices
one array to access those objects
*/

var correctCount = 0;
var	incorrectCount = 0;
var currentKey = 0;
var whichKey = ['bui','donn','dearg','ban','glas','bandearg','gorm','corcra','dubh','liath'];
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
liath :	'Question 10 of 10: What color is Liath?<'
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

 /*Plan is to loop through each object and 'construct' each question adding the needed content using a skeleton form.
 Answers are checked and results from the last one will be displayed in the bottom of the page. 
 Hopefully I can cleanup the repeated code below. 
 How to iterate over over object? - an array of keys to keep track of where you are. - current key value - use with each object.
break out functions - one for label, one for ____, etc and then call it on the 
 */

//how do I create choices?

$('#start').click(function () {
	$('#intro').detach();
	$('#question').html(questions[whichKey[currentKey]]);
	$('input').each( function (){
		var i =0;
		$(this).html("value = " + colorChoices[whichKey[currentKey][i]])
		i++             
	}	
	);
	$('#updateMe').toggle();
	}
	

);

$().click(

	);




$('#continue9').click(function(){
	var userAnswer = $('#question9 :input');
	if ( userAnswer == answers['dubh']) {++correctCount}
	else { incorrectCount++}
	
});


//This is the results page - ref http://www.omniglot.com/language/colours/irish.php
$('#continue10').click(function(){
	var userAnswer = $('#question10 :input');
	if ( userAnswer == answers['liath']) {++correctCount}
	else { incorrectCount++}

	$('#correct').html("You got " + correctCount + " colors right!")
	$('#incorrect').html("You got " + incorrectCount + " colors wrong!")
	$('#results').toggle();
});

