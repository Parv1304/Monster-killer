const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(300,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 550, 100, 100);
  box2 = new Box(650, 550, 100, 100);
  box3 = new Box(700, 550, 100, 100);
  box4 = new Box(600, 500, 100, 100);
  box5 = new Box(650, 500, 100, 100);
  box6 = new Box(700, 500, 100, 100);
  box7 = new Box(600, 450, 100, 100);
  box8 = new Box(650, 450, 100, 100);
  box9 = new Box(700, 450, 100, 100);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}