var circles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 50; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: 40,
    };
    var overlapping = false;
    for (var j = 0; j < circles.length; i++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
  }

  for (var i = 0; i < circles.length; i++) {
    fill(100, 150, 250, 100);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw() {}
