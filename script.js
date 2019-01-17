var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function(){
  // generate new colors
  colors = generateRandomColors(numSquares);
  // pick a new random colors from array
  pickedColor = pickColor();
  // change colorDisplay to match pickedColors
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
});

for (var i = 0; i < squares.length; i++) {
// Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // Add click listener to squares
  squares[i].addEventListener('click', function() {
  // Grab color of clicked square
  var clickedColor = this.style.backgroundColor;
  // compare color to the variable pickedColor
  if (clickedColor === pickedColor) {
  messageDisplay.textContent = "Correct !";
  resetButton.textContent = "Play Again ?";
  changeColors(clickedColor);
  h1.style.backgroundColor = clickedColor;
  } else {
  this.style.backgroundColor = '#232323';
  messageDisplay.textContent = "Try Again";
  }
  })
};

// Change each color to match the picked color (the right color)
// for this, we have to make a loop through each square
function changeColors(colors){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
};


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // Repeat num times
  for (var i = 0; i < num; i++) {
    //get ramdom colors and push them in the array
    arr.push(randomColor()) * num;
  }
  // return that array
  return arr;
}

function randomColor(){
  //pick a red from 0 to -255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 to -255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

easyButton.addEventListener('click', function() {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
});

