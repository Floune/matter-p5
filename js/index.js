let balls = [];
let lines = [];
let engine;
let world;
let Engine = Matter.Engine
let World = Matter.World
let Bodies = Matter.Bodies
let Body = Matter.Body
let refX, refY;

function setup() {
 createCanvas(500, window.innerHeight); 
 engine = Engine.create();
 world = engine.world
 ground = new Ground()
 lines.push(ground)
 Engine.run(engine)
}

function draw() {
 background(255);
 lines.forEach(line => {
  line.draw()
})
 balls.forEach(balle => {
  balle.draw()
});
}

function keyPressed() {
	balls.push(new Ball(mouseX, mouseY));
}

function mousePressed() {
  console.log(mouseX, mouseY)
  refX = mouseX
  refY = mouseY
}

function mouseReleased() {
  longueur = getDistance(refX, refY, mouseX, mouseY)  
  var theta = atan2(mouseY - refY, mouseX - refX);
  let l = new Line(refX, refY, longueur, theta);
  lines.push(l)
}

function getDistance(x1, y1, x2, y2) {
  var xs = x2 - x1,
      ys = y2 - y1;   
  
  xs *= xs;
  ys *= ys;

  return Math.sqrt( xs + ys );
}
