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



//Donn question
$('#continue1').click(function(){
		$('#question1').detach();
	$('#question2').toggle();
}
);

//Dearg
$('#continue2').click(function(){
	$('#question2').detach();
	$('#question3').toggle();
}
);

//Ban
$('#continue3').click(function(){
	$('#question3').detach();
	$('#question4').toggle();
}
);

//Glas
$('#continue4').click(function(){
		$('#question4').detach();
	$('#question5').toggle();
}
);

//Bandearg
$('#continue5').click(function(){
	$('#question5').detach();
	$('#question6').toggle();
}
);

//Gorm
$('#continue6').click(function(){
	$('#question6').detach();
	$('#question7').toggle();
}
);

//Corcra
$('#continue7').click(function(){
	$('#question7').detach();
	$('#question8').toggle();
}
);

//Dubh
$('#continue8').click(function(){
		$('#question8').detach();
	$('#question9').toggle();
}
);


//This is the results page
$('#continue9').click(function(){

});

