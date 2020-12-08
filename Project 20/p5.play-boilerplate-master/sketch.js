
var rect1,rect2;
var speed,weight; 


function setup() {
  createCanvas(700,400);
  rect1=createSprite(650, 200, 100, 400);
  rect1.shapeColor=("blue");

  rect2=createSprite(50,200,20,20);

  speed = random(55,90);
  weight= random(400,1500);
  

}

function draw() {
  background("black"); 
  rect2.velocityX=speed;

if(rect2.x-rect1.x<rect1.width/2+rect2.width/2  &&  rect1.x-rect2.x<rect1.width/2+rect2.width/2
    && rect2.y-rect1.y<rect1.height/2+rect2.height/2  &&  rect1.y-rect2.y<rect1.height/2+rect2.height/2){
    
  rect2.velocityX=0;
  rect2.x=600
  var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){
   rect2.shapeColor=("red");
 }
 if(deformation<180  &&  deformation>100){
  rect2.shapeColor=("white");
 }
 if(deformation<180  &&  deformation>0){
  rect2.shapeColor=(rgb(0,250,0));
 }
}

  drawSprites()
}