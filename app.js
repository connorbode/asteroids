
var canvas = d3.select('svg');

canvas.append('polygon')
  .attr('points', '0,10 0,-10 25,0')
  .style('stroke', '#000')
  .style('fill', '#000');

//
// Handle the left key being pressed
//
var handleLeftKeyDown = function () {

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

window.addEventListener('keydown', handleKeyDown);