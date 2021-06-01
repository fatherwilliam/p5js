function setup() {
  createCanvas(1000, 200);
}

function draw() {
  background(140);
  let counter = 0;
  let x = 100;
  let y = 100;
  textSize(32);
  while(counter < 5){
    ellipse(x, y, 80, 80);
    text(counter, x-10, y+10);
    counter = counter + 1; 
    x = x + 90; 
  }
}
