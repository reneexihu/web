
var colors = [
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)"
];
var squares = document.querySelectorAll(".squares");
var pickedColor = colors[3];
var message = document.querySelector(".result");


for(var i=0; i<squares.length; i++){
	// add init color
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor){
			// all squares turn to pickedColor;
			// for(var j=0; j<squares.length; j++){
			// 	squares[j].style.background = pickedColor;
			// }
			message.textContent = "Correct"
			changeColor(pickedColor);
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

