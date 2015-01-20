var tripleFive = function() {
	var result = "";
	for(i=1;i<=3;i++) {
		var msg = "Five!";
		console.log("Five!");
		result = result + " " + msg;
	}
	return result;
};
document.getElementById("question1").innerHTML = tripleFive();

var lastLetter = function(string) {
	var last = string.charAt(string.length-1);
	return last;
};
document.getElementById('question2').innerHTML = lastLetter("Hello");

var square = function(x) {
	return x * x;
};
document.getElementById('question3').innerHTML = square(5);

var negate = function(x) {
	return x * -1;
};
document.getElementById('question4').innerHTML = negate(-8);

var toArray = function(a, b, c) {
	var myArray = [a, b, c];
	return myArray;
};
document.getElementById('question5').innerHTML = toArray(1,4,5);

var startsWithA = function(string) {
	return string.charAt(0).toUpperCase() === "A" ;
};
document.getElementById('question6').innerHTML = startsWithA("Aardvark");

var excite = function(string) {
	return string + "!!!";
};
document.getElementById('question7').innerHTML = excite("go");

var sun = function(string) {
	var look = /sun/i;
	return look.test(string);
};
document.getElementById('question8').innerHTML = sun('catapult');

var tiny = function(x) {
	return x > 0 && x < 1;
};
document.getElementById('question9').innerHTML = tiny(-5);

var getSeconds = function(string) {
	var arr = string.split(":");
	return (Number(arr[0]) * 60) + Number(arr[1]);
};
document.getElementById('question10').innerHTML = getSeconds("10:25");
