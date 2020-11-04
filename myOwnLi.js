function bounceOff(object1,object2){
bulletRightEdge = object1.x+1/2*(object1.width)-35;
wallLeftEdge = object2.x-object2.width/2;
if(bulletRightEdge>=wallLeftEdge){
  object1.velocityX=0;
  
}
b1damage =(0.5*b1mass*b1speed*b1speed)/(thickness*thickness*thickness);
b2damage =(0.5*b2mass*b2speed*b2speed)/(thickness*thickness*thickness);
if(b1damage>10){
  wall.tint=("red");
}

if(b1damage<10){
  wall.tint=("green");
}

if(b2damage>10){
  wall2.tint=("red");
}

if(b2damage<10){
  wall2.tint=("green");
}

console.log(b1damage);
console.log(b2damage);
}