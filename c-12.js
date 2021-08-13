var boy,  run_joxen, runner_collided;
var path , visibleGround , pathImage; 

function preload(){
  //pre-load images
  run_joxen  = loadAnimation("runner-1.png" , "runner-2.png");
   path = loadImage("path.png");
   path= loadImage("runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //moving background
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocity = 4;
  path.scale = 1.2;


  
  //create a way Sprite 
  path = createSprite(200,120,250,10);
  path.addImage = ("path", pathImage);
  path.x = pat.width/2;
  path.velocity = -4;
}

function draw() {
  background(0);
  
  //jump when the space button is pressed 
  if (keyDown("space") && run_joxen.y >= 100);
     run_joxen.velocity = -10;
}

  joxen.velocityY =  joxen.velocityY + 0.8;


   //code to reset the background 
  if (path.y > 400){
     path.y =  height/2;
 

   // invisible path 
  invisiblepath = createSprite(130,195,420,20);
  invisiblepath.visible = false;
  
  }


drawSprites();