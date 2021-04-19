function enableMouse() {
  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()
  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasmouse
  })
}

function mousePressed() {
  if (drawmode === true) {
    refX = mConstraint.mouse.position.x
    refY = mConstraint.mouse.position.y
  } else {
    handleInteractionModeClic()
  }
}

function mouseReleased() {
  if (drawmode === true) {
    createLine()
  } else {
    handleIneractionModeRelease()
  }
}

function keyPressed() {

 console.log(keyCode)
 let ki = keyCode
 switch(ki) {
    // space
    case 32:
      addShape()
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
    //s
    case 83:
    toogleRotation()
    break;
    // k
    case 75:
    removeSelection()
  }

}

function handleInteractionModeClic() {
  deselectAll()
  selected = isShapeClicked()
  if (selected !== false) {
    selected.body.isStatic = false
  }

}

function handleIneractionModeRelease() {
  if (selected !== false) {
    selected.body.isStatic = true
  }
}

function deselectAll() {
  lines.forEach(line => {
    line.selected = false;
  })
}

function toogleRotation() {
  lines.forEach(line => {
    if (line.selected === true) {
      line.rotating = !line.rotating
    }
  })
}

function toggleDraw() {
  drawmode = !drawmode
  if (drawmode == false) {
    World.add(world, mConstraint)
  } else {
    World.remove(world, mConstraint)
  }
}



function handleLoopInteractions() {

  if (keyIsPressed === true) {
    if (keyCode === 65) {
      addShape()
    }
  }

}

function addShape() {
  if (window.params.currentShape === "ball") {
    balls.push(new Ball(mouseX, mouseY));
  }
  if (window.params.currentShape === "square") {
    balls.push(new Square(mouseX, mouseY));
  }
}
