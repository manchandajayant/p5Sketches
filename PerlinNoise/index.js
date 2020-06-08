var xoff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  var x = map(noise(xoff), 0, 1, 0, width);
  var y = map(noise(xoff), 0, 1, 0, height);
  // var y = noise(width);
  xoff += 0.04;

  ellipse(x, y, 50, 50);
}
