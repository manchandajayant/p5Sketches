let mobilenet;
let classifier;
let puffin;
let label = "";
let button;
let button2;
let headphones;
let train;
function modelReady() {
  console.log("ready");
  // mobilenet.predict(gotResults);
}

function videoReady() {
  console.log("video ready");
}

function whileTraining(loss) {
  console.log(loss);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    label = results[0].label;
  }
}

// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor("MobileNet", video, modelReady);
  classifier = mobilenet.classification(video, videoReady);
  button = createButton("Mobile");
  button.mousePressed(function () {
    classifier.addImage("Mobile");
  });
  button2 = createButton("AddHead");
  button2.mousePressed(function () {
    classifier.addImage("AddHead");
  });
  train = createButton("train");
  train.mousePressed(function () {
    classifier.train(whileTraining);
  });
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);

  text(label, 10, height - 20);
  //console.log(label);
  //mobilenet.predict(gotResults);
  //createP(`${Math.abs(results[0].confidence * 100).toFixed(2)}%`);
  // createP(label);
}
