function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight); 

  engine = Engine.create();
  world = engine.world

  ground = new Ground()
  ground.init()
  enableMouse()

  World.add(world, mConstraint)

}

function draw() {
  drawHUD()
  Engine.update(engine)

  handleLoopInteractions()
  
  drawAssets()
}

