//Kill Monster
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var gameState="Sling";

function preload() {

  back=loadImage("GamingBackground.png");
  vI=loadImage("Monster-01.png");

}

function setup() {
  createCanvas(1418, 680);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ground
  ground=new Ground(700,650,1418);

  //hero
  hero=new Hero(350,50,200,200);
  s1=new SlingShot(hero.body,{x:350,y:50});

  //Box
  b1=new Box(600+200,200+420,50,50);
  b2=new Box(600+200,150+420,50,50);
  b3=new Box(600+200,100+420,50,50);
  b4=new Box(600+200,50+420,50,50);
  b5=new Box(600+200,0+420,50,50);
  b6=new Box(600+200,-50+420,50,50);
  b7=new Box(600+200,-100+420,50,50);

  b8=new Box(700+200,200+420,50,50);
  b9=new Box(700+200,150+420,50,50);
  b10=new Box(700+200,100+420,50,50);
  b11=new Box(700+200,50+420,50,50);
  b12=new Box(700+200,0+420,50,50);
  b13=new Box(700+200,-50+420,50,50);
  b14=new Box(700+200,-100+420,50,50);

  b15=new Box(900+100,200+420,50,50);
  b16=new Box(900+100,150+420,50,50);
  b17=new Box(900+100,100+420,50,50);
  b18=new Box(900+100,50+420,50,50);
  b19=new Box(900+100,0+420,50,50);
  b20=new Box(900+100,-50+420,50,50);
  b21=new Box(900+100,-100+420,50,50);

  b22=new Box(1100,200+420,50,50);
  b23=new Box(1100,150+420,50,50);
  b24=new Box(1100,100+420,50,50);
  b25=new Box(1100,50+420,50,50);
  b26=new Box(1100,0+420,50,50);
  b27=new Box(1100,-50+420,50,50);
  b28=new Box(1100,-100+420,50,50);
 
  //create villan 
  villan=new Villan(1250,500,150,150);

}

function draw() {
  background(back);
  textSize(20);
  fill ("black");
  text ("Score: "+score,20,40);

  //hero
  hero.display();
  
  //ground
  ground.display();

  //Box
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();

  //villan
  villan.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  s1.release(this.hero);
  gameState="Launched";
}

function keyPressed(){
  if (keyCode===32&&hero.body.speed<1){
    s1.reAttach(hero.body);
   // gameState=PLAY;
  }
}