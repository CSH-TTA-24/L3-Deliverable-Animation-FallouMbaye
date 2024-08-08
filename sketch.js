let yPos = 25;

let xPos = 250

let r, g, b;



function setup() {
   createCanvas(500, 500);
   background(0);
}


function draw() {
   background(0, 20);
  
 

   fill(r, g, b);
   ellipse(xPos, yPos, 50, 50);


   yPos += 3;


   if (yPos > 525) {
       yPos = -25;
   }
}

function mouseClicked(){
  yPos = 25
  var r = random(0, 255)
  var g = random(0, 255)
  var b = random(0, 255)
  xPos = random(25, 475)
  fill(r, g, b)
}



