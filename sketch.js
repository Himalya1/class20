var movingrect,fixedrect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(500,200,70,70);
  movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  drawSprites();
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red"; 
    }
    else{
      movingrect.shapeColor="yellow";
      fixedrect.shapeColor="yellow";
    }
}