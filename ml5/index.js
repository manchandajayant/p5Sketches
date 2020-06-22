let mobilenet;
let puffin;
let label;
function modelReady() {
  console.log("ready");
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    fill(0);
    textSize(64);
    if (results.length > 0) {
      text(label, 10, height - 50);
      console.log(label);
      createP(`${Math.abs(results[0].confidence * 100).toFixed(2)}%`);
      createP(label);
    }
  }
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  background(0);
  puffin = createImg("Assets/hm.jpg", imageReady);
  puffin.hide();
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
