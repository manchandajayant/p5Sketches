var circles = []
function setup(){

  createCanvas(windowWidth,windowHeight)

  for(var i=0;i<50;i++){
 var circle={
 x : random(width),
 y : random(height),
 r : 40
  }

  circles.push(circle)

  }

for(var i =0;i<circles.length;i++){
  fill(100,150,250,100)
  noStroke()
  ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2)
}
}

function draw(){

}