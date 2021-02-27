
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,platform,hammer;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//ground =new Ground (600,height,1200,20);
	//platform = new Ground(150, 305, 300, 170);
	//Create the Bodies Here.
	ground = Bodies.rectangle(200,390,200,20);

	platform = createSprite(600,390,1200,20);

    hammer = new Hammer(600,200,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
  
  drawSprites();
  hammer.display();
 
}



