const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

var man_walking, man
var invisibleGround
var umbrella 
var maxDrops = 100
var drop = []
var lightning1
var lightning2
var lightning3
var lightning4
function preload(){

  man_walking = loadAnimation(  "images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
  lightning1 = loadImage("images/thunderbolt/1.png"); 
  lightning2 = loadImage("images/thunderbolt/2.png"); 
  lightning3 = loadImage("images/thunderbolt/3.png"); 
  lightning4 = loadImage("images/thunderbolt/4.png"); 
}

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(1000, 1000);
  man = createSprite(500,600,100,100)
  man.addAnimation("runinng", man_walking)
  man.scale = 0.5
  ///umbrella = new Umbrella(20,25)

 
 

  }

function draw() {
  background("black")
  drawSprites();

  thunder()
//umbrella.display()
 for(var i = 0; i<maxDrops; i++){
  drop.push(new Drop(random(0,400), random(0,400)));
 }



}

function thunder(){
  if (World.frameCount % 10=== 0){
      var lightning = createSprite(500,570,10,10)
      rand = Math.round(random(1,4))
    switch(rand)
    { 
  case 1: 
        lightning.addImage("light",lightning1);
        break; 
  case 2: 
  lightning.addImage("light",lightning2); 
        break; 
  case 3:
    lightning.addImage("light",lightning3);
        break; 
  case 4: 
  lightning.addImage("light",lightning4); 
        break; 
         default: 
        break; }
        console.log(lightning)
    }}