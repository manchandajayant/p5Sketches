var circles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  var protection = 0;
  while (circles.length < 300) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random(12, 40),
    };
    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
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

    protection++;
    if (protection > 10000) {
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    fill(100, 150, 250, 100);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw() {}
