const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

for (var k = 50; k < 800; k = k+50){
   plinkos.push(new Plinko(k,100,15));
}

for (var k = 25; k < 800; k = k+50){
  plinkos.push(new Plinko(k,170,15));
}

for (var k = 50; k < 800; k = k+50){
  plinkos.push(new Plinko(k,240,15));
}

for (var k = 25; k < 800; k = k+50){
 plinkos.push(new Plinko(k,310,15));
}



ground = new Ground(400,790,800,20)

for (var k = 80; k < 800; k = k + 80) {
  divisions.push(new Division(k, 650, 10, 300));
}
}

function draw() {
  Engine.update(engine);
  
  background(0);  
  for (var k = 0; k < plinkos.length; k++) {
     
    plinkos[k].display();
  }

for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}

if(frameCount%20===0){
  particles.push(new Particle(random(0,800),random(0,10)))
 }

for (var k = 0; k < particles.length; k++) {
     
  particles[k].display();
}
ground.display();


drawSprites();
}