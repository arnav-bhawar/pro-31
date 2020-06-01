
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snake;


function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  //snake = new Snake(200,200,20,20);

  var options = {
    isStatic :true
  }


  box = Bodies.rectangle(200,200,50,50,options);
  World.add(world,box);

  box2= Bodies.rectangle(300,200,50,50,options);
  World.add(world,box2);
  fill("green");




}

function draw(){
background("black");
Engine.update(engine);

rectMode(CENTER);
rect(box.position.x,box.position.y,50,50);
fill("red");


rectMode(CENTER);
rect(box2.position.x,box2.position.y,50,50);

if (keyCode===32){
  box.position.x = box.position.x+2;
}

if(box2.isTouching=box){
  box2.setPosition(x=10,y=10);
}






}

