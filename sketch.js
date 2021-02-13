const Engine = Matter.Engine; //gravity,bounceoff,collision,velocity
const Bodies = Matter.Bodies; //The things on which physics engine can act
const World = Matter.World; //Background for the game

//Physics engine matter.js it is used to create real life effects in the game
var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:1.0
  }
  
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}
//Physics Engine
//box2d, matter.js, p2.js
//Three objects -> World,Bodies and Engine.
//Giving a name to any object is called as namespacing.
//Bounciness effect in physics is called as "restitution"