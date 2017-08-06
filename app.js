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
	$('#question1').toggle();

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



//Donn question
$('#continue1').click(function(){
		$('#question1').hide();
	$('#question2').toggle();
}
);

//Dearg
$('#continue2').click(function(){
	$('#question2').hide();
	$('#question3').toggle();
}
);

//Ban
$('#continue3').click(function(){
	$('#question3').hide();
	$('#question4').toggle();
}
);

//Glas
$('#continue4').click(function(){
		$('#question4').hide();
	$('#question5').toggle();
}
);

//Bandearg
$('#continue5').click(function(){
	$('#question5').hide();
	$('#question6').toggle();
}
);

//Gorm
$('#continue6').click(function(){
	$('#question6').hide();
	$('#question7').toggle();
}
);

//Corcra
$('#continue7').click(function(){
	$('#question7').hide();
	$('#question8').toggle();
}
);

//Dubh
$('#continue8').click(function(){
		$('#question8').hide();
	$('#question9').toggle();
}
);


//This is the results page
$('#continue9').click(function(){
	
);

