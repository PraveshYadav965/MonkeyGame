var sprite , sprite_running, spriteCollide;
var ground
var banana ,bananaImage, obstacle, obstacleImage;
var score = 0;
var survivaltime = 0;
var obstacleGroup;
var bananaGroup;

function preload(){
  sprite_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   spriteCollide = loadAnimation("sprite_1.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup(){
 createCanvas(600,400);
   
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
 
  sprite= createSprite(80,310,20,20);
  sprite.scale = 0.12;
  sprite.addAnimation("sprite", sprite_running);
  
  
    
  ground = createSprite(300,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
  
  
  
  
}

function draw(){
  background(255);
  
   stroke("white");
   textSize(20);
   fill("white");
   text("score:"+ score,500,50);
  
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime=Math.ceil(frameCount/frameRate())
   text("survivalTime:"+ survivalTime,100,50);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
    if(keyDown("space")&&sprite.y >= 250){
      sprite.velocityY = -13; 
    }
  
    sprite.velocityY = sprite.velocityY + 0.8
  
  
  sprite.collide(ground);
  
  obstacles();
    bananas();
  
    
  drawSprites(); 
  
}

function bananas(){
  if (frameCount%80 === 0){
    
    banana = createSprite(620,120, 50, 50 )
    var rand = Math.round(random(120,200));
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-4;  
    banana.lifetime = 220;
    bananaGroup.add (banana);
    
  }
  

  
}

function obstacles(){
  if (frameCount%300 === 0){
    
    obstacle = createSprite(500,325,50,50);
    var rand = Math.round(random(120,200));
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.13 ;
    obstacle.velocityX = -4
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    
  }
  
  
}
