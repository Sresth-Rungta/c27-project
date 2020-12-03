
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	roof = new Roof(370,200,600,20)
	bob1 = new Bob(100,300)
	bob2 = new Bob(200,300)
	bob3 = new Bob(300,300)
    bob4 = new Bob(400,300)
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
 // drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
}



