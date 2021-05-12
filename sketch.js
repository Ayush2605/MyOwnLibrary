var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 100, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.velocityX = -1;
  //movingRect.velocityY = 2;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(255,255,255); 
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY; 
  bounceOff(movingRect,gameObject4);
  
  if(isTouching(movingRect, gameObject4)){ 
    movingRect.shapeColor = "blue"; 
    gameObject4.shapeColor = "blue"; 
  } 
  else{ 
    gameObject4.shapeColor = "green"; 
    movingRect.shapeColor = "green"; 
  }

  
  

  drawSprites();
}

