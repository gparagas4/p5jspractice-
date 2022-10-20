let w = 600
let h = 600
function setup() {
  createCanvas(w,h);
}

function draw() {
  fill("yellow")
  stroke("black")
  background(125);
  beginShape(TRIANGLE_STRIP);
  vertex(40, 80);
  vertex(60, 20);
  vertex(60, 75);
  vertex(80, 20);
  vertex(90, 75);
  vertex(80, 20);
  vertex(90, 75);
  endShape();
}
