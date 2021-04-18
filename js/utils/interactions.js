function enableMouse() {
  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()
  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasmouse
  })
  //World.add(world, mConstraint)
}

function mousePressed() {
  isShapeClicked()

  if (drawmode === true) {
    refX = mConstraint.mouse.position.x
    refY = mConstraint.mouse.position.y
  }
}

function keyPressed() {

 console.log(keyCode)
  let ki = keyCode
  switch(ki) {
    case 32:
      balls.push(new Ball(mouseX, mouseY));
      break;
    case 85:
      let toDelete = lines.pop();
      World.remove(world, toDelete.body);
      break;
    case 112:
      legend = !legend
      break;
    case 82:
      resetSketch()
      break;
    case 66:
      resetBalls()
      break;
    case 68:
      toggleDraw()
      break;
    case 76:
      resetLines()
      break;
  }

}

function toggleDraw() {
  drawmode = !drawmode
}

function mouseReleased() {
  createLine()
}

function handleLoopInteractions() {

  if (keyIsPressed === true) {
    if (keyCode === 65) {
      balls.push(new Ball(mouseX, mouseY));
    }
  }

}
