"use strict";

/* click to start the quiz - it replaces the div with the correct quiz style
*/

$('#start').click(function () {
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red" required><div style="background-color: red;"></div><br><button id="continue1">Submit Answer</button></form>');
}
);


var correctAnswers = 0;
var	incorrectAnswers = 0;
//This is the click of the next page (and maybe the other pages thereafter) 
$('#continue1').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue2">Submit Answer</button></form>');
}
);

$('#continue2').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue3">Submit Answer</button></form>');
}
);

$('#continue3').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue4">Submit Answer</button></form>');
}
);

$('#continue4').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue5">Submit Answer</button></form>');
}
);

$('#continue5').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue6">Submit Answer</button></form>');
}
);

$('#continue6').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append('<form><label>Bui</label><br><input type="radio" name="color" value="yellow"><div style="background-color: yellow;" ></div><br><input type="radio" name="color" value="brown"><div style="background-color: brown;"></div><br><input type="radio" name="color" value="pink"><div style="background-color: pink;"></div><br><input type="radio" name="color" value="red"><div style="background-color: red;"></div><br><button id="continue7">Submit Answer</button></form>');
}
);

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

$('#continue9').click(function(correctAnswers, incorrectAnswers){
	$('#quiz').empty();
	$('#quiz').append();
}
);

