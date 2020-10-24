const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var border1,border2,border3;
                               
function preload(){}

function setup() {
	createCanvas(1200,800);

	engine = Engine.create();
	world = engine.world;
     
	ball = new PaperBall(50,200,20,20)

  ground = new Ground(600,650,1200,20)

  border1 = new Dustbin(1050,630,200,20);
  border2 = new Dustbin(940,580,20,100);
	border3 = new Dustbin(1160,580,20,100);

	Engine.run(engine);                        
}

function draw() {
  background("grey");

  Engine.update(engine);
  ball.display();

  ground.display();

  border1.display();
  border2.display();              
  border3.display();
  
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
}