var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg;
var leaves,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);
  
  // Creating Garden
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();

  drawSprites();
}

function createApples()
{
  if (frameCount % 150 === 0){
    var apples = createSprite(150,200,30,25);
    apples.addImage (applesImg);
    apples.scale = 0.05;
    apples.velocityY = 2;
    apples.y = Math.round(random(30,100));

    apples.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;

    apples.lifeTime = 130;
  }
  
}

function createLeaves()
{
  if (frameCount % 70 === 0){
    var leaves = createSprite(300,200,30,25);
    leaves.addImage (leavesImg);
    leaves.scale = 0.05;
    leaves.velocityY = 2;
    leaves.y = Math.round(random(80,200));

    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;

    leaves.lifeTime = 130;
  }
  
}