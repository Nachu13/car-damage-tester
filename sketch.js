var zenia, tourus, cyclap;
var wall1, wall2, wall3;
var line1, line2, line3;
function setup() {
  createCanvas(300,300);
  zenia = createSprite(50, 50, 10, 10);
  tourus = createSprite(50, 150, 10, 10);
  cyclap = createSprite(50, 250, 10, 10);
  line1= createSprite(200, 100, 350, 1);
  line2= createSprite(200, 200, 350, 1);
  line3= createSprite(200, 300, 350, 1);
  wall1 = createSprite(50, 380, 10, 50);
  wall2 = createSprite(150, 380, 10, 50);
  wall3 = createSprite(250, 380, 10, 50);
}

function draw() {
  background("#428f70");  
  drawSprites();
}