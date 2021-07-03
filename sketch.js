const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20); 
    ground1 = new Ground(500,height-150,400,20); 
    ground2 = new Ground(900,height-50,400,20);
    box1 = new Box(550,height-170,50,50) 
    box2 = new Box(490,height-170,50,50) 
    box3 = new Box(430,height-170,50,50) 
    box4 = new Box(360,height-170,50,50) 
    box5 = new Box(610,height-170,50,50) 
    box6 = new Box(460,height-220,50,50) 
    box7 = new Box(520,height-280,50,50) 
    box8 = new Box(580,height-340,50,50) 
    box9 = new Box(550,height-270,50,50) 
    box10 = new Box(550,height-270,50,50) 
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display() 
    ground1.display() 
    ground2.display() 
    box1.display() 
    box2.display() 
    box3.display() 
    box4.display() 
    box5.display() 
    box6.display() 
    box7.display() 
    box8.display() 
    box9.display() 
    box10,display()
}


