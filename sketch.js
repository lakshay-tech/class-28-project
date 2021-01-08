
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
	GroundObject=new Ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:430});

	Engine.run(engine);
  
}


function draw() {

	background(230);
   
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);
	image(tree,750,0,600,800);
   
	stoneObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango6.display();
   mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	stoneObj.display();
  
	GroundObject.display();
	launcherObject.display();
	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);
	detectollision(stoneObj,mango6);
	detectollision(stoneObj,mango7);
	detectollision(stoneObj,mango8);
	detectollision(stoneObj,mango9);
	detectollision(stoneObj,mango10);
	detectollision(stoneObj,mango11);
	detectollision(stoneObj,mango12);
  }
  
  function mouseDragged()
  {
	  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
  }
  
  function mouseReleased()
  {
	  launcherObject.fly();
  
  }
  
  function keyPressed() {
	  if (keyCode === 32) {
	  Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
		launcherObject.attach(stoneObj.body);
	  }
	}
  
	function detectollision(lstone,lmango){
  
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
		if(distance<=lmango.r+lstone.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}



