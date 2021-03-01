



var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,ground_image;
var invisibleground;

var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  ground_Image=loadImage("ground2.png")
 
}



function setup() {
  createCanvas(600,200)
   ground=createSprite(200,180,1400,20)
 ground.addImage(ground_Image)
  ground.velocityX=-5
  
  
  monkey=createSprite(30,180,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  

  
  invisibleground=createSprite(200,200,1400,20)
  invisibleground.visible=false;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0
  
}


function draw() {
  background("black")
  drawSprites();

 console.log(Math.round(monkey.y))
  
  monkey.collide(invisibleground)
  if(ground.x<0){
  ground.x=ground.width/2
}

 if(keyDown("space") && monkey.y>=140){
   monkey.velocityY=-12
 }
monkey.velocityY=monkey.velocityY+0.8


if(bananaGroup.isTouching(monkey)){
 
  bananaGroup[0].destroy();   
}
  

score=score+Math.round(getFrameRate()/60)




obstaclemade();
bananamade();
  text("Score: "+score,540,20)
}
function bananamade(){
  if(frameCount%80===0){
    banana=createSprite(570,70,10,10)
    banana.y=Math.round(random(50,180))
    banana.addImage(bananaImage)
    banana.velocityX=-2
    banana.scale=0.1
    banana.lifetime=275
    bananaGroup.add(banana)
  }
}
function obstaclemade(){
  if(frameCount%300===0){
    obstacle=createSprite(570,160,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-5
    obstacle.scale=0.13
    obstacle.lifetime=275
    obstacleGroup.add(obstacle)
  }
}




