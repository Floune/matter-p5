function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world
  enableMouse()
  World.add(world, mConstraint)

  ground.init()

  soundFormats('mp3', 'ogg', 'wav');
  slingSound = loadSound('assets/sling.mp3');
}

function draw() {
  drawHUD()
  Engine.update(engine)

  handleLoopInteractions()
  
  drawAssets()

  releaseSlingShotOrNot()
}



