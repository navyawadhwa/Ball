
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground1;
var dust1, dust2, dust3;
var line;

function setup() {
	createCanvas(670, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,200);
	ground1= new Ground(400, 600,800,10);
	dust1=new Dust(510, 565, 10,60);
	dust3=new Dust(620, 565, 10,60);
	dust2=new Dust(560,590,110,10);
	

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  
  keyPressed();

  paper1.display();
  ground1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:4.95, y:-10.03})
	}
}88