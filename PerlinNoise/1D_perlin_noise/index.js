var inc = 0.01;
var start = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  //var x = map(noise(xoff), 0, 1, 0, width);
  //var y = map(noise(yoff), 0, 1, 0, height);
  // var y = noise(width);
  // xoff += 0.01;
  // yoff += 0.01;
  // ellipse(x, y, 50, 50);
  stroke(20);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(155, 240, 250);
    //var n = map(noise(xoff), 0, 1, -50, 50);
    //var s = map(sin(xoff), -1, 1, 0, height);
    //var y = s + n;
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;
}
