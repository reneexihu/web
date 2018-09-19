
var colors = genRandomColor(6);// numColor;

var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var message = document.querySelector(".result");
var numColor = 6;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#new");

resetButton.addEventListener("click", function(){
	reset();
});


for(var i=0; i<squares.length; i++){
	// add init color
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		// inside
		if(clickedColor === pickedColor){
			// all squares turn to pickedColor;
			// for(var j=0; j<squares.length; j++){
			// 	squares[j].style.background = pickedColor;
			// }
			changeColor(pickedColor);
			message.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			//h1 background
			h1.style.background = pickedColor;
		}
		else{
			this.style.background = "#FFFFFF";
			message.textContent = "Try Again"
		}
	});
}

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function genRandomColor(numColor) {
	var arr = [];
	for(var i=0; i<numColor; i++){
		// arr[i] = rgb(Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256))
		arr[i] = randomColor();
		// arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	// return rgb(r, g, b);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	// genRandom color
	colors = genRandomColor(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//display
	for(var i=0; i<squares.length; i++){
	// add init color
		squares[i].style.background = colors[i];
	}
	h1.style.background = "white";
	resetButton.textContent = "New Color";
	message.textContent = "";
	//correct still there.
}

//Problem1 new color button doesn't work.
//Solution:colors = genRandomColor(); missing 6 as argument;
//Problem2 rgb display dont change
//Solution colorDisplay = pickedColor; use wrong function.
//Problem3 correct still there.
//add message.textContent = "";