const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,platform,block1,block2,block3,block4,block5,block6,
block7,block8,block9,block10,block11,block12,block13,block14,block15;
var polygon;
var slingshot;
var score = 0;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(400,650,700,50);
  platform= new Ground (600,625,225,25);

   block1 = new Box(600,600,45,45);
   block2 = new Box(550,600,45,45);
   block3 = new Box(500,600,45,45);
   block4 = new Box(650,600,45,45);
   block5 = new Box(700,600,45,45);
   // level2
   block6 = new Box(575,550,45,45); 
   block7 = new Box(525,550,45,45);
   block8 = new Box(675,550,45,45);
   block9 = new Box(625,550,45,45);
   //level3
   block10 = new Box(550,500,45,45);
   block11 = new Box(600,500,45,45);
   block12 = new Box(650,500,45,45);
   //level4
   block13 = new Box(575,450,45,45);
   block14 = new Box(625,450,45,45);
   //level5
   block15 = new Box(600,400,45,45);

   polygon= Bodies.circle(50,200,20);
   World.add(world,polygon);
   polygon.trajectory = [];

   slingshot = new SlingShot(this.polygon,{x:200,y:200});

   
}

function draw() {
  background("green");  
  Engine.update(engine);

  text("SCORE " + score,720,40);
  

  ground.display();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  slingshot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  //console.log(polygon.trajectory);
  ellipse(polygon.position.x,polygon.position.y,20,20);
  
}
function mouseDragged(){
     Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}