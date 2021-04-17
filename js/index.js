let balls = [];
let lines = [];

let canvas;
let engine;
let world;

let Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint,
Vector = Matter.Vector,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint,
Body = Matter.Body

let mConstraint;
let refX, refY;
let legend = false

function setup() {
 canvas = createCanvas(window.innerWidth - 40, window.innerHeight); 
 
 engine = Engine.create();
 world = engine.world
 
 ground = new Ground()
 ground.init()

 enableMouse()
 Engine.run(engine)
}

function draw() {
  background(255);
  ground.draw()
  text('f1: toggle legend', 10, 20);
  if( legend === true) {
    drawLegend()
  }

  if (keyIsPressed === true) {
    if (keyCode === 65) {
      balls.push(new Ball(mouseX, mouseY));
    }
  }
  lines.forEach(line => {
    line.draw()
  })

  balls.forEach(balle => {
    balle.draw()
  });
}

function drawLegend() {
  fill("black")
  textSize(18)
  text('mouse: draw lines', 10, 40);
  text('space: spawn single ball', 10, 60);
  text('a: spawn chaos', 10, 80);
  text('u: undo', 10, 100);
  text('r: reset', 10, 120);
}

function enableMouse() {
  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()
  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasmouse
  })
  World.add(world, mConstraint)
}

function mousePressed() {
  refX = mConstraint.mouse.position.x
  refY = mConstraint.mouse.position.y
}

function keyPressed() {
  console.log(keyCode)
  if (keyCode === 32) {
    balls.push(new Ball(mouseX, mouseY));
  } else if (keyCode === 85) {
    let toDelete = lines.pop()
    console.log(toDelete)
    World.remove(world, toDelete.body)
  } else if (keyCode === 112) {
    legend = !legend
  } else if (keyCode === 82) {
    resetSketch()
  }

  console.log(keyCode)
}

function resetSketch() {
  balls.forEach(toDelete => {
    World.remove(world, toDelete.body)
  })
  lines.forEach(toDelete => {
    World.remove(world, toDelete.body)
  })
  balls = []
  lines = []
}

function mouseReleased() {
  createLine()
}

function createLine() {
  let actualX = mConstraint.mouse.position.x
  let actualY = mConstraint.mouse.position.y

  longueur = getDistance(refX, refY, actualX, actualY)  
  var theta = atan2(actualY - refY, actualX - refX);

  let l = new Line(refX, refY, longueur, theta, actualX, actualY);
  l.init()
  lines.push(l)
}

function getDistance(x1, y1, x2, y2) {
  var xs = x2 - x1,
  ys = y2 - y1;   
  
  xs *= xs;
  ys *= ys;

  return Math.sqrt( xs + ys );
}
