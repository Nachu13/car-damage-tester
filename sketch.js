var zenia, tourus, cyclap;
var wall1, wall2, wall3;
var line1, line2, line3;
function setup() {
  createCanvas(300,300);
  zenia = createSprite(50, 50, 10, 10);
  tourus = createSprite(150, 50, 10, 10);
  cyclap = createSprite(250, 50, 10, 10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}