function enableMouse() {
  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()
  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasmouse
  })
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
    // space
    case 32:
      balls.push(new Ball(mouseX, mouseY));
      break;
    // u
    case 85:
      undou()
      break;
    // f1
    case 112:
      legend = !legend
      break;
    // r
    case 82:
      resetSketch()
      break;
    // b
    case 66:
      resetBalls()
      break;
    // d
    case 68:
      toggleDraw()
      break;
    // l
    case 76:
      resetLines()
      break;
  }

}

function toggleDraw() {
  drawmode = !drawmode
  if (drawmode == false) {
    World.add(world, mConstraint)
  } else {
    World.remove(world, mConstraint)
  }
}

function mouseReleased() {
  if (drawmode === true) {
    createLine()
  }
}

function handleLoopInteractions() {

  if (keyIsPressed === true) {
    if (keyCode === 65) {
      balls.push(new Ball(mouseX, mouseY));
    }
  }

}
