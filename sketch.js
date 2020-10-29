const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var border1,border2,border3;
                               
function preload(){}

function setup() {
	createCanvas(1400,800);

	engine = Engine.create();
	world = engine.world;
     
	ball = new PaperBall(50,200,20,20)

  ground = new Ground(700,650,1400,20)

  border1 = new Dustbin(1050,630,230,20);
  border2 = new Dustbin(920,470,30,340);
	border3 = new Dustbin(1180,470,30,340);

	Engine.run(engine);                        
}

function draw() {
  background("grey");

  Engine.update(engine);
  ground.display();

  ball.display();

  border1.display();
  border2.display();              
  border3.display();

  
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(ball.body,ball.body.position,{x:99,y:-99});
  }
}