var wall, bullet;
var wall2,bullet2;
var wall3,bullet3;
var shooter,shooter1;
var bulletImg; 
var b1speed,b1mass;
var b2speed,b2mass;
var b3speed,b3mass;
var backImg,back;
var wallImg; 
var shSound;
var b1damage;
var b2damage;
var b3damage;
var thickness;

function preload(){
  shooter = loadImage("shooter.png");
  bulletImg = loadImage("bullet2.png");
  wallImg=loadImage("shootingBr.png");
  shSound=loadSound("shooting.mp3");
  backImg=loadImage("blast.jpg")
}
function setup() {

  createCanvas(1200,800);

back=createSprite(600,400);
back.addImage(backImg);


  thickness=Math.round(random(22,80));
  
  wall = createSprite(900, 300, thickness, 80);
  wall.shapeColor = "green";
 
  wall.addImage(wallImg);
 // wall.scale=0;

  bullet = createSprite(230, 280,100,50);
  bullet.shapeColor = "green";

  bullet2 = createSprite(230, 580,100,50);
  bullet2.shapeColor = "green";
  
  

  bullet.addImage(bulletImg);
  bullet.scale=0.7;

  bullet2.addImage(bulletImg);
  bullet2.scale=0.7;

  wall2 = createSprite(900, 600, thickness, 80);
  wall2.shapeColor = "green";
  
  wall2.addImage(wallImg);

  
 

b1speed=Math.round(random(223,321));
b1mass=Math.round(random(30,52));

b2speed=Math.round(random(223,321));
b2mass=Math.round(random(30,52));

b3speed=Math.round(random(10,20));
b3mass=Math.round(random(30,52));

  shooter1 = createSprite(155, 300,80,30);
  shooter1.shapeColor = "green";
  
  shooter1.scale=0.3;
  shooter1.addImage(shooter);


  shooter2 = createSprite(155, 600,80,30);
  shooter2.shapeColor = "green";
 
  shooter2.scale=0.3;
  shooter2.addImage(shooter);

  shSound.play();
 

bullet.velocityX=b1speed;
bullet2.velocityX=b2speed;





 
}
  
function draw() {
  background("black");  


  
  

   bounceOff(bullet,wall)
   bounceOff(bullet2,wall2)
     
  drawSprites();
}
