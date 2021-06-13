const Y_AXIS = 1;
const X_AXIS = 2;


// execute once when the program begins
function setup() {
 createCanvas(1000, 800);
 background(240);
 stroke(0);
 noLoop();
  y = height * 0.5;
  
}


// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
    let xBegin = 400;
    let yBegin = 100;
    let rectWidth = 20;
    let rectHeight = round(random(10, 50));
    let counter = 10;
    while(counter > 0){
        let angle = random(-2,2);
        let angleRadians = radians(angle);
        
        //rotate (angleRadians);
        drawRectangle(xBegin, yBegin, rectWidth, rectHeight);
        text("<-- rectHeight = " + rectHeight + ", yBegin = " + yBegin, xBegin + rectWidth + 30, yBegin + 10); 
        
        yBegin = yBegin + rectHeight -2; 
        rectHeight = round(random(50, 100));
          
        counter-=1;
    }
            
}
function drawRectangle(xBegin, yBegin, rectWidth, rectHeight){
    const b1 = color(250);
    const b2 = color(140);
    rect(xBegin, yBegin, rectWidth, rectHeight);
    setGradient(xBegin, yBegin, rectWidth, rectHeight, b1, b2, X_AXIS); 
}
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }