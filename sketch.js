
var bow , arrow,  background, arrowGroup;
var backgroundImage;

var bowImage, arrowImage ; 
var greenballoonImage, redballoonImage, pinkballoonImage ,blueballoonImage;

var greenballoonGroup, redballoonGroup, pinkballoonGroup ,blueballoonGroup;
    
var score = 0; 
  
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");

  redballoonImage = loadImage("red_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  greenballoonGroup = new Group();
  redballoonGroup =  new Group();
  pinkballoonGroup =  new Group();
  blueballoonGroup =  new Group();

  arrowGroup =  new Group();
}  

function draw() {
 background(0);

// moving ground
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
//moving bow
  bow.y = World.mouseY
  
// release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
//creating continous balloons
  var selectballoon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
  
    if (selectballoon == 1) {
      redBalloon();
    }
    if (selectballoon == 2) {
      blueBalloon();
    }
    if (selectballoon == 3) {
      greenBalloon();
    }
    if (selectballoon == 4) {
      pinkBalloon();
    }
  }
  
  if (redballoonGroup.isTouching(arrowGroup)) {
    redballoonGroup.destroyEach();
    arrowGroup.destroyEach();
  
    score=score-2;  
  }

  if (greenballoonGroup.isTouching(arrowGroup)) {
    greenballoonGroup.destroyEach();
    arrowGroup.destroyEach();
  
    score=score+3;  
  }
  
  if (pinkballoonGroup.isTouching(arrowGroup)) { 
    pinkballoonGroup.destroyEach();
    arrowGroup.destroyEach();
  
    score=score+1;  
  }
  
  if (blueballoonGroup.isTouching(arrowGroup)) {
    blueballoonGroup.destroyEach();
    arrowGroup.destroyEach();
  
    score=score+5;  
  }
  
  drawSprites();
  
  fill("maroon");
  textSize(20); 
  text("Score: "+score,270,30) 
}

 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  
  arrow.x = 360;
  arrow.y=bow.y;
  
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 75, 75);
  red.addImage(redballoonImage);
  
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  
  redballoonGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 75, 75);
  blue.addImage(blueballoonImage);
  
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  
  blueballoonGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 75, 75);
  green.addImage(greenballoonImage);
  
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  
  greenballoonGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 75, 75);
  pink.addImage(pinkballoonImage);
  
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  
  pinkballoonGroup.add(pink);
}
  
