var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  food = createVector(random(width), random(height));
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl);
}

function draw(){
  background(51);
  snake.update();
  snake.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}


// var canvas = document.getElementById('canvas');
// var pen = canvas.getContext('2d');

// // Create an instance of our Snake object
// var snake = new Snake();

// // Set up the event listener on canvas for key up events:
// document.addEventListener("keyup", handleKeyUp);

// function handleKeyUp(event) {
//   if (event.keyCode === 38) {
//     // set direction to UP
//     snake.direction(0,-1);
//   } else if (event.keyCode === 40) {
//     // set direction to DOWN
//     snake.direction(0,1);
//   } else if (event.keyCode === 37) {
//     // set direction to LEFT
//     snake.direction(-1,0);
//   } else if (event.keyCode === 39) {
//     // set direction to RIGHT
//     snake.direction(1,0);
//   }
// }

// // Animation loop:
// function animate(timestamp) {
//   // Clears the whole canvas between each animation frame:
//   pen.clearRect(0, 0, 2000, 2000);

//   // Redraw the snake:
//   snake.updateAndShow();

//   requestAnimationFrame(animate);
// }
// // Start the animation loop:
// requestAnimationFrame(animate);

// // Define the properties and methods of every Snake object:
// function Snake () {
//   this.x = 0;
//   this.y = 0;

//   this.xDirection = 1;
//   this.yDirection = 0;

//   this.direction = function(x, y) {
//     this.xDirection = x;
//     this.yDirection = y;
//   };
// }

// // Method for the snake to update its coordinates and direction of travel.
// // NOTE: this is called by our animate function as part of the animation loop!
// Snake.prototype.updateAndShow = function() {
//     // Determine new coordinates based on old location and current direction of trabel:
//     this.x = this.x + this.xDirection;
//     this.y = this.y + this.yDirection;

//     // Draw a rectangle at the above coordinates to represent the snake:
//     pen.fillRect(this.x, this.y, 100, 100);
// };
