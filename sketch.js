var helicopterIMG, helicopterSprite, packageSprite,packageIMG,groundSprite;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	box1=new Box(width/2,height-10-35-groundSprite.height/2,200,20,255,0,0);
	box2=new Box(width/2-box1.width/2,height-50-35-groundSprite.height/2,20,100,255,0,0);
	box3=new Box(width/2+box1.width/2,height-50-35-groundSprite.height/2,20,100,255,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  console.log(keyIsPressed);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();

  if (keyIsPressed){
    Body.setStatic(packageBody,false)
}
 
}

function keyIsPressed() {
    if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
      return true;
    
  }
    else{
      return false;
  }
}



