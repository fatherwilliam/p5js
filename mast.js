
function setup() {
    createCanvas(1000, 800);
}
  
function draw() {
    background(255);
    console.log("call");
    frameRate (0);
    const INITIAL_TREE_COLOR = 230;
    const INITIAL_TREE_WIDTH = 30;
    drawMast(500, 800, 500, 100, INITIAL_TREE_WIDTH, INITIAL_TREE_COLOR);
}

function drawGradientLine(xBegin, yBegin, xEnd, yEnd, lineWeight, color){
  let NUMBER_OF_LINES = 10;
  let oneMiniLineWeight =lineWeight/NUMBER_OF_LINES;
 
  strokeWeight(oneMiniLineWeight);
  let i = 0;
  while(i < NUMBER_OF_LINES){
    color = color - i*5;
    stroke(color);
    line(xBegin, yBegin, xEnd, yEnd);
    i += 1;
    xBegin = xBegin + oneMiniLineWeight;
    xEnd = xEnd + oneMiniLineWeight;
  }

}

function drawMast(xBegin, yBegin, xEnd, yEnd, weight, color){
    strokeWeight(weight);
    strokeCap(SQUARE);
    
    let counter = 0;
    let onePieceHight = 15; 
    let mastLength = yBegin - yEnd;
    let narrowingDownStep = (weight/2)/(mastLength/onePieceHight);
    let newWeight = weight;
    
    while(counter < mastLength){
        let rotateAngle = round(random(-10, 10));
        //push();
        //rotate(rotateAngle);
        //drawGradientLine(xBegin, yBegin, xEnd, yBegin+onePieceHight, newWeight, color); 
        //pop();
        yBegin = yBegin - onePieceHight;
        counter = counter + onePieceHight;
        newWeight = newWeight - narrowingDownStep;
    }

}
  