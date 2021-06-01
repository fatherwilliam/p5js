
function setup() {
    createCanvas(1000, 800);
  }
  
function draw() {
    background(140);
    let counter = 0;
    let x = 500;
    let y = 800;
    
    //drawLine 
    //strokeWeight(50);
    stroke(255);
    drawMast(500, 800, 500, 100, 20);
  }

function drawMast(xBegin, yBegin, xEnd, yEnd, weight){
    strokeWeight(weight);
    let counter = 0;
    let onePieceSize = 20; 
    let mastLength = yBegin - yEnd;
    let narrowingDownStep = (weight/2)/(mastLength/onePieceSize);
    let newWeight = weight;
    while(counter < mastLength){
        line(xBegin, yBegin, xEnd, yBegin+onePieceSize); 
        yBegin = yBegin - onePieceSize;
        counter = counter + onePieceSize;
        newWeight = newWeight - narrowingDownStep;
        strokeWeight(newWeight);
    }
    
}
  