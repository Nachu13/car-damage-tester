var zenia, tourus, cyclap;
var wall1, wall2, wall3;
var line1, line2, line3;
var speed, weight, deformation;
function setup() {
  createCanvas(300,300);
  zenia = createSprite(50, 50, 10, 10);
  tourus = createSprite(50, 150, 10, 10);
  cyclap = createSprite(50, 250, 10, 10);
  line1= createSprite(200, 100, 400, 1);
  line2= createSprite(200, 200, 400, 1);
  line3= createSprite(200, 300, 400, 1);
  wall1 = createSprite(50, 280, 10, 50);
  wall2 = createSprite(150, 280, 10, 50);
  wall3 = createSprite(250, 280, 10, 50);
  speed = random(55, 90);
  weight = random(400, 1500);
}

function draw() {
  background("#fff200"); 
  if (mousepressedOver(zenia)){
    zenia.velocityX = speed;
  } 
  if (mousePreesedOver(tourus)){
    tourus.velocityX = speed;
  }
  if (mousePressedOver(cyclap)){
    cyclap.velocityX = speed;
  }
  if  (zenia.isTouching(wall1)){
    zenia.velocityX = 0;
  }
  if (zenia.isTouching(wall1)){
    zenia.collide(wall1);
    Text("deformation = " (0.5 * weight * zenia.velocityX * zenia.velocityX)/22500, 50, 50);
  }
  if (tourus.isTouching(wall2)){
    tourus.collide(wall2);
    Text("deformation = " (0.5 * weight * to.velocityX * tourus.velocityX)/22500, 50, 150);
  }
  if (cyclap.isTouching(wall3)){
    cyclap.collide(wall3);
    Text("deformation = " (0.5 * weight * cyclap.velocityX * cyclap.velocityX)/22500, 50, 50);
  }
  drawSprites();
}