const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2
var bob3;
var bob4
var bob5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var opt={
		isStatic:false,
			restitution:1,
			friction:0,
			density:0.8

	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	bob1 = Bodies.circle(400,300,20,opt);
    World.add(world,bob1);
	bob2 = Bodies.circle(420,300,20,opt);
    World.add(world,bob2);
	bob3 = Bodies.circle(440,300,20,opt);
    World.add(world,bob3);
	bob4 = Bodies.circle(460,300,20,opt);
    World.add(world,bob4);
	bob5 = Bodies.circle(480,300,20,opt);
    World.add(world,bob5);
	con1=Matter.Constraint.create({
    
		bodyA:bob1,
		bodyB:roof,
		pointB: {x:-40,y:0},
		//length:200,
		//stiffness:0.05
	  })
   
	  World.add(world,con1)
	con2=Matter.Constraint.create({
    
		bodyA:bob2,
		bodyB:roof,
		pointB: {x:-20,y:0},
		//length:200,
		//stiffness:0.05
	  })
   
	  World.add(world,con2)
	  con3=Matter.Constraint.create({
    
		bodyA:bob3,
		bodyB:roof,
		pointB: {x:0,y:0},
		//length:200,
		//stiffness:0.05
	  })
   
	  World.add(world,con3)
	  con4=Matter.Constraint.create({
    
		bodyA:bob4,
		bodyB:roof,
		pointB: {x:20,y:0},
		//length:200,
		//stiffness:0.05
	  })
   
	  World.add(world,con4)
	  con5=Matter.Constraint.create({
    
		bodyA:bob5,
		bodyB:roof,
		pointB: {x:40,y:0},
		//length:200,
		//stiffness:0.5
	  })
   
	  World.add(world,con5)
	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  //create ellipse shape for multiple bobs here
  ellipseMode(RADIUS)
ellipse(bob1.position.x,bob1.position.y,20, 20)
ellipse(bob2.position.x,bob2.position.y,20, 20)
ellipse(bob3.position.x,bob3.position.y,20, 20)
ellipse(bob4.position.x,bob4.position.y,20, 20)
ellipse(bob5.position.x,bob5.position.y,20, 20)

}


function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
    }
}