const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var maxdrops = 100;
var umbrella;
var drops = [];
var thunder;
var thunder1 , thunder2 , thunder3 , thunder4;
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(500,800);

    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(250,650);
    thunder = new Thunder(300 , 200 , width , height);
   
    
    for(var i=0; i<maxdrops; i++){
        drops.push(new Drop(random(0,400), random(0,400),10));
    }
    
}

function draw(){
background("black");
Engine.update(engine)
    umbrella.display();
     thunder.display();
    for(var i=0; i<maxdrops; i++){
        drops[i].display();
}   
for(var i=0; i<maxdrops; i++){
    drops[i].update();
}
 
}
