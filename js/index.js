let balls = [];
let lines = [];
let engine;
let world;
let Engine = Matter.Engine
let World = Matter.World
let Bodies = Matter.Bodies
let Constraint = Matter.Constraint
let Vector = Matter.Vector
let Mouse = Matter.Mouse
let MouseConstraint = Matter.MouseConstraint
let mConstraint;


let Body = Matter.Body
let refX, refY;

function setup() {
 let canvas = createCanvas(window.innerWidth, window.innerHeight); 
 engine = Engine.create();
 world = engine.world
 ground = new Ground()
 lines.push(ground)
 Engine.run(engine)

 let canvasmouse = Mouse.create(canvas.elt)
 canvasmouse.pixelRatio = pixelDensity()
 mConstraint = MouseConstraint.create(engine, {
  mouse: canvasmouse
})
 World.add(world, mConstraint)
}

function draw() {
 background(255);
 if (keyIsPressed) {
  balls.push(new Ball(mouseX, mouseY));
}
lines.forEach(line => {
  line.draw()
})
balls.forEach(balle => {
  balle.draw()
});
}

function mousePressed() {
  refX = mConstraint.mouse.position.x
  refY = mConstraint.mouse.position.y
}

function mouseReleased() {
  let actualX = mConstraint.mouse.position.x
  let actualY = mConstraint.mouse.position.y
  longueur = getDistance(refX, refY, actualX, actualY)  
  var theta = atan2(actualY - refY, actualX - refX);
  let l = new Line(refX, refY, longueur, theta, actualX, actualY);
  lines.push(l)
}

function getDistance(x1, y1, x2, y2) {
  var xs = x2 - x1,
  ys = y2 - y1;   
  
  xs *= xs;
  ys *= ys;

  return Math.sqrt( xs + ys );
}
