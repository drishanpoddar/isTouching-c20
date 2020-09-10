var movingrectangle,fixedrectangle;

function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(400, 200, 80, 50);
  fixedrectangle=createSprite(200,100,80,40);
  movingrectangle.shapeColor="green" ;
  fixedrectangle.shapeColor="green";
  movingrectangle.debug=true;
  fixedrectangle.debug=true;
}

function draw() {
  background(255,255,255); 
 movingrectangle.x=mouseX;
 movingrectangle.y=mouseY;
 console.log(movingrectangle.y, fixedrectangle.y);
 if (movingrectangle.x-fixedrectangle.x<=movingrectangle.width/2 +fixedrectangle.width/2 
  && fixedrectangle.x-movingrectangle.x<=movingrectangle.width/2+fixedrectangle.width/2
  && movingrectangle.y-fixedrectangle.y<=movingrectangle.height/2+fixedrectangle.height/2
  && fixedrectangle.y-movingrectangle.y<=movingrectangle.height/2+fixedrectangle.height/2){
   movingrectangle.shapeColor="red";
   fixedrectangle.shapeColor="red";
   
 }
 else{
   movingrectangle.shapeColor="green";
   fixedrectangle.shapeColor="green";
 }
  drawSprites();
}