var ROTATION_INTERVAL = 100;
var canvas = d3.select('svg');

var Ship = function () {
  this.rotation = 0,  // rotation from horizontal (following coordinate plane)
  this.velocityX = 0, // increase in x per redraw interval
  this.velocityY = 0, // increase in y per redraw interval
  this.x = 0,         // x coordinate
  this.y = 0          // y coordinate

  this.svg = canvas.append('polygon')
    .attr('points', '-10,-10 -10,10 15,0')
    .attr('transform', 'translate(100,100)')
    .style('stroke', '#000')
    .style('fill', '#000');

  var rotationInterval;
  this.startRotatingLeft = function () {
    rotationInterval = setInterval(function () {
      this.rotation += 1;
      if (this.rotation > 359) this.rotation = 0;
      this.draw();
    }.bind(this), ROTATION_INTERVAL);
  };
};

//
// Draw the ship on the canvas
//
// This is executed every
//
Ship.prototype.draw = function () {
  var transformStr;
  this.x += this.velocityX;
  this.y += this.velocityY;
  transformStr = 'translate(' + this.x + ',' + this.y + ') rotate(' + this.rotation + 'deg)';
  this.svg.attr('tranform', transformStr);
};

//
// Increases the velocity of the ship
//
Ship.prototype.increaseVelocity = function () {
  
};

//
// Decreases the velocity of the ship
//
Ship.prototype.decreaseVelocity = function () {

};

//
// Handle the left key being pressed
//
var handleLeftKeyDown = function () {
  ship.startRotatingLeft();
};

//
// Handle the left key being released
//
var handleLeftKeyUp = function () {
  ship.stopRotatingLeft();
};

//
// Handle the right key being pressed
//
var handleRightKeyDown = function () {

};

//
// Handle the up key being pressed
//
var handleUpKeyDown = function () {

};

//
// Handle the down key being pressed
//
var handleDownKeyDown = function () {

};

//
// Handle keys being pressed
//
var handleKeyDown = function (e) {
  switch (e.keyCode) {
    case 37:
      handleLeftKeyDown();
      break;

    case 38:
      handleUpKeyDown();
      break;

    case 39:
      handleRightKeyDown();
      break;

    case 40:
      handleDownKeyDown();
      break;
  }
};

//
// Handle keys being released
//
var handleKeyUp = function (e) {
  switch (e.keyCode) {
    case 37:
      handleLeftKeyUp();
      break;

    case 38:
      handleUpKeyUp();
      break;

    case 39:
      handleRightKeyUp();
      break;

    case 40:
      handleDownKeyUp();
      break;
  }
};

var ship = new Ship();
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
setInterval(ship.draw.bind(ship), 100);