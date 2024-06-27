function setup() {
    createCanvas(500, 450);
    background("purple");
  }
  
  function draw() {
    stroke("black")
    fill("black")
    
    //console.log(mouseIsPressed) 
    
    if(mouseIsPressed){
     circle(mouseX, mouseY, 23, 14) 
    }
  }
  