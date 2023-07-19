var box





function setup() {
  createCanvas(400,400);
  box = createSprite (200,200, 30, 30)
}

function draw() 
{
  background(30);
  if (keyDown(UP_ARROW)){
    box.velocityY = 3
  }
  // if (keyDown(Down)){
  //   box.velocityY = -3
  // }
  // if (keyDown("left")){
  //   box.velocityX = -3
  // }
  // if (keyDown("right")){
  //   box.velocityX = 3
  // }
drawSprites()
}




