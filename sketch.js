var bg_img;
var naveimg,nave1;
var vx=0;
var vy=0;

function preload(){
bg_img = loadImage("assets/bg.png")
naveimg = loadImage("assets/nave.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  nave1=createSprite(100,500,40,40)
  nave1.addImage(naveimg);
  nave1.scale=0.5

}

function draw() {
  background(bg_img);
  nave1.position.x+=vx;
  nave1.position.y+=vy;
  drawSprites();
}

function KeyPressed(){
  if(KeyCode===RIGHT_ARROW){
    vx+=1;

  }
}