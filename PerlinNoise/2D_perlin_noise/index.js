var inc = 0.01;
function setup() {
  createCanvas(200, 200);
}

function draw() {
  loadPixels();
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var index = (i + j * width) * 4;
      pixels[index + 0] = random(255);
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
