
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var paper,ground;


function setup() {
	var canvas = createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	
	//create the paper
	paper=new Paper(50,50,2);
	
	//Create a Ground
	ground = new Ground(400,540,800,20);
	 
	leftDustbinWall=new DustbinWall(400,450,20,150);
	RightDustbinWall=new DustbinWall(650,450,20,150);
	BottomDustbinWall=new DustbinWall(525,527,250,15);
	
	
	Engine.run(engine);
  }

function draw() {
   background(0);
   Engine.update(engine);
   ground.display();
   leftDustbinWall.display();
   RightDustbinWall.display();
   BottomDustbinWall.display();
  
   paper.x=mouseX;
	paper.y=mouseY;

   paper.display();
   

   console.log();
  
 //keyPressed();
}
/*
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
*/
