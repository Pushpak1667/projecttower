
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var ground,ground1,ground2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;

var launcherObj;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = new Polygon(100,100,60);

ground = new Ground(windowWidth/2,windowHeight - 40,width,25);
ground1 = new Ground(500,400,300,20);
ground2 = new Ground(950,320,300,20);

box1 = new Block(380,300);
box2 = new Block(440,300);
box3 = new Block(500,300);
box4 = new Block(560,300);
box5 = new Block(620,300);


box6 = new Block(410,250);
box7 = new Block(470,250);
box8 = new Block(530,250);
box9 = new Block(590,250);

box10 = new Block(440,200);
box11 = new Block(500,200);
box12 = new Block(560,200);

box13 = new Block(470,150);
box14 = new Block(530,150);

box15 = new Block(500,100);


block1 = new Block(830,250);
block2 = new Block(890,250);
block3 = new Block(950,250);
block4 = new Block(1010,250);
block5 = new Block(1070,250);

block6 = new Block(860,200);
block7 = new Block(920,200);
block8 = new Block(980,200);
block9 = new Block(1040,200);

block10 = new Block(890,150);
block11 = new Block(950,150);
block12 = new Block(1010,150);

block13 = new Block(920,100);
block14 = new Block(980,100);

block15 = new Block(950,50);


launcherObj = new Launcher(polygon.body,{x:200,y:200});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

ground.display();
ground1.display();
ground2.display();
fill("yellow");
polygon.display();

fill("red")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

block15.display();

fill("blue")
box6.display();
box7.display();
box8.display();
box9.display();

block13.display();
block14.display();

fill("Yellow")
box10.display();
box11.display();
box12.display();

block10.display();
block11.display();
block12.display();

fill("purple");
box13.display();
box14.display();

block6.display();
block7.display();
block8.display();
block9.display();

fill("orange");
box15.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

launcherObj.display();

  drawSprites();
}
