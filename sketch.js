const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,box;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground123=new GROUND (360,350,400,45)
    box =new box1(250,300,60,25)
    box2= new box1 (322,250,70,28) 
}

function draw(){
    background(0);
    Engine.update(engine);
    ground123. display()
    box.display()
    box2.display()  

   
   
}