var status = "";

function preload() {
  img = loadImage("fruits.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  detecter = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
  status = true;
  console.log("Model Loaded Correctly!");
  detecter.detect(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results)
}
}

function draw() {}
