"use strict";

/* click to start the quiz - it replaces the div with the correct quiz style
*/
$('#start').click(function () {
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button>Submit Answer</button></form>')
}
);

var correctAnswers = 0;
var	incorrectAnswers = 0;
//This is the click of the next page (and maybe the other pages thereafter) $().

