var bg_img;
var naveimg,nave1;
var vx=0;
var vy=0;
var g=0.05;
var bomb_animation;
var met1,met2;
var bomb1;
var enemie;
var miss1,explosao;

function preload(){
  bg_img = loadImage("assets/bg.png")

  naveimg = loadImage("assets/nave.png")

  bomb_animation=loadAnimation("assets/Bomb_3_Explosion_000.png","assets/Bomb_3_Explosion_001.png",
    "assets/Bomb_3_Explosion_002.png","assets/Bomb_3_Explosion_004.png","assets/Bomb_3_Explosion_008.png");

  met1=loadImage("assets/Meteor_02.png");
  met2=loadImage("assets/Meteor_05.png");

  bomb1=loadImage("assets/Bomb_3_Explosion_000.png");

  miss1=loadImage("assets/Missile_1_Flying_000.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  nave1=createSprite(100,500,40,40)
  nave1.addImage(naveimg);
  nave1.scale=0.5

}

function draw() {
  background(bg_img);
  vy+=g;
  nave1.y=World.mouseX;
  if(keyWentDown("space")){
    missel=createSprite(nave1.x,nave1.y,50,50)
    missel.addImage(miss1);
    missel.scale=0.2;
    missel.velocityX=10;
  }
  enemies();
  drawSprites();
}



  function enemies(){
    if(frameCount%70===0){
      enemie=createSprite(width+200,Math.round(random(50,height-50)))
      enemie.velocityX=-5;
      enemie.rotationSpeed=0.3;
      enemie.scale=0.3
      var rand=Math.round(random(1,3));
      switch (rand) {
        case 1:enemie.addImage(met1)
          break;
        case 2:enemie.addImage(bomb1)
          break;
        case 3:enemie.addImage(met2)
          break;
        default:
          break;
      }
    }
  }
