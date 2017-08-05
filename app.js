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
	t
}
);

//Ban
$('#continue3').click(function(){

}
);

//Glas
$('#continue4').click(function(){
	
}
);

//Bandearg
$('#continue5').click(function(){

}
);

//Gorm
$('#continue6').click(function(){

}
);

//Corcra
$('#continue7').click(function(){

}
);

//Dubh
$('#continue8').click(function(){

}
);

//This is the results page
$('#continue9').click(function(){
	$('#quiz').empty();
	$('#quiz').append();
}
);

