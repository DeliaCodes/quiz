"use strict";

/* click to start the quiz - two choices for how to do this - remove and insert diff elements (seems messy!) or 
you can hide the questions and then unhide them to progress which is what I've chosen.
*/

// currentAnswer is checking against the input value
var currentAnswer = 'yellow';

//

$('#start').click(function () {
	$('.question').toggle();

	//need to remove the initial question
	
	/* Previously used code
	$('#quiz').empty();
	//$('#quiz').append('<form><label>What does Bui mean?</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ><p>Yellow</p></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"><p>Brown</p></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"><p>Pink</p></div><br><input type="radio" name="color" value="red" required><div style="background-color: red;"><p>Red</p></div><br><button id="continue1">Submit Answer</button></form>');
	
	*/
}
);
 /*Skeleton form at all time and then just change content. Currently loading form after JS is loaded.
 base form that checks if its right and updates the form
 class to right answer or current answers in a state and checked against that state.
 Container - word. Wrong Answers. Right Answer. And Function to update form based on that data system.
 */

var correctAnswers = 0;
var	incorrectAnswers = 0;

//This is the click of the next page (and maybe the other pages thereafter) - update content vs new form
//Donn question
$('#continue1').click(function(){
	event.preventDefault();
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//Dearg
$('#continue2').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//Ban
$('#continue3').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//Glas
$('#continue4').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//Bandearg
$('#continue5').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//Gorm
$('#continue6').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//Corcra
$('#continue7').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);
//Dubh
$('#continue8').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('');
}
);

//This is the results page
$('#continue9').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append();
}
);

