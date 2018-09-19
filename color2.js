
var colors = genRandomColor(6);// numColor;

var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var message = document.querySelector(".result");
var numColor = 6;
var h1 = document.querySelector("h1");

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
			message.textContent = "Correct"
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