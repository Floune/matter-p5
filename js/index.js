function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight); 

  engine = Engine.create();
  world = engine.world

  ground = new Ground()
  ground.init()

  enableMouse()
  Engine.run(engine)
}

function draw() {

  drawHUD()

  handleLoopInteractions()
  
  drawAssets()
}

