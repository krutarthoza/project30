const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {

}

function setup(){
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,500,1200,20);
  ground2 = new Ground(375,270,500,20);
  polygon = new Polygon(100,90);
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);
  slingshot= new SlingShot(polygon.body,{x:100,y:90});
}

function draw(){
  background(0);
  Engine.update(engine);

  ground.display();
  ground2.display();
  polygon.display();
  slingshot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  drawSprites()
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}


function mouseReleased(){
  slingshot.fly();
}