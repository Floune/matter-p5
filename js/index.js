function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world
  enableMouse()
  World.add(world, mConstraint)

  ground = new Ground()
  ground.init()
  soundFormats('mp3', 'ogg', 'wav');
  slingSound = loadSound('assets/sling.mp3');
}

function draw() {
  drawHUD()
  Engine.update(engine)

  handleLoopInteractions()
  
  drawAssets()

  if (currentlySlinged && currentlySlinged.sling.bodyB && currentlySlinged.sling.bodyB.speed > currentlySlinged.sling.stiffness * 25 ) {
    let newB
    if (currentlySlinged.sling.bodyB.label === "Rectangle Body") {
      newB = new Square(currentlySlinged.sling.pointA.x, currentlySlinged.sling.pointA.y, balls.length);
    } else if (currentlySlinged.sling.bodyB.label === "Circle Body") {
      newB = new Ball(currentlySlinged.sling.pointA.x, currentlySlinged.sling.pointA.y, balls.length, currentlySlinged.sling.bodyB.circleRadius)
    }
    let newSl = new SlingShot(currentlySlinged.sling.pointA.x, currentlySlinged.sling.pointA.y, newB.body );
    currentlySlinged.fly()
    slingshots.push(newSl)
    balls.push(newB)
  }
}

