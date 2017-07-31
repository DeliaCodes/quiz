"use strict";

/* click to start the quiz - it replaces the div with the correct quiz style
*/

// currentAnswer is checking against the input value
var currentAnswer = 'yellow';

$('#start').click(function () {
	$('#quiz').empty();
	$('#quiz').append('<form><label>What does Bui mean?</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ><p>Yellow</p></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"><p>Brown</p></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"><p>Pink</p></div><br><input type="radio" name="color" value="red" required><div style="background-color: red;"><p>Red</p></div><br><button id="continue1">Submit Answer</button></form>');
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
	$('#quiz').append('<form><label>Donn</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ><p>Yellow</p></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><p>Brown</p><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"><p>Pink</p></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"><p>Red</p></div><br><button id="continue2">Submit Answer</button></form>');
}
);

//Dearg
$('#continue2').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Dearg</label><br><input type="radio" name="color" value="purple"><div style="background-color: purple;" ></div><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;"><p>Yellow</p></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"><p>Red</p></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"><p>Brown</p></div><br><button id="continue3">Submit Answer</button></form>');
}
);

//Ban
$('#continue3').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue4">Submit Answer</button></form>');
}
);

//Glas
$('#continue4').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue5">Submit Answer</button></form>');
}
);

//Bandearg
$('#continue5').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue6">Submit Answer</button></form>');
}
);

//Gorm
$('#continue6').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue7">Submit Answer</button></form>');
}
);

//Corcra
$('#continue7').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue8">Submit Answer</button></form>');
}
);

$('#continue8').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue9">Submit Answer</button></form>');
}
);

//This is the results page
$('#continue9').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append();
}
);

