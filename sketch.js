var astronaut;
var bg;
var sleep, bg_Ig, brush, gym, gym2, eat, drink, move, bath;


function preload(){
  bg_Ig = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png")
}

function setup() {
  createCanvas(400, 400);
  bg = createSprite(200,200);
  bg.addAnimation("background", bg_Ig);

  astronaut = createSprite(250,200,20,20);
  astronaut.addAnimation("sleeping" ,sleep);
  astronaut.scale = 0.1;


}

function draw() {
  background(220);


  var edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 200;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
      }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }   

    if(keyDown("m")){
      astronaut.addAnimation("moving", move);
      astronaut.changeAnimation("moving");
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      }   
    
  drawSprites();
}