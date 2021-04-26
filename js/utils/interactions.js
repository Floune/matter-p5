function enableMouse() {
  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()
  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasmouse
  })
}

function mousePressed() {
  if (drawmode === true && isNotInToolbar() && isNotInParams()) {
    handleDrawModeClic()
  } else if (isNotInParams()) {
    handleInteractionModeClic()
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
      toggleLegend()
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
      toggleRotation()
      break;
      // k
    case 75:
      removeSelection()
      break;
      //z
    case 90:
      toggleGrid()
      break;
      //g
    case 71:
      toggleGravity()
      break;
      //e
    case 69:
      linkSelection()
      break;
      //c
    case 67:
      resetConstraints()
      break;
      //m
    case 77:
      lockUnlockselection()
      break;
  }

}

function mouseReleased() {
  if (drawmode === true) {
    handleDrawModeRelease()
  } else if (drawmode === false) {
    handleSlingShots()
  }
}

function mouseDragged() {
  if (drawmode === true && window.params.currentShape === "barrier") {
    let ghost = lines[lines.length - 1]
    let actualX = mConstraint.mouse.position.x
    let actualY = mConstraint.mouse.position.y

    longueur = getDistance(refX, refY, actualX, actualY)
    var theta = atan2(actualY - refY, actualX - refX);
    if (ghost) {
      ghost.update(refX, refY, longueur, theta, actualX, actualY)
    }
  }
}

function handleInteractionModeClic() {
  if (isNotInToolbar() === true) {
    if (isShapeClicked() === false) {
      deselectAll()
    }
  }
}


function handleDrawModeClic() {
  if (isNotInToolbar() === true) {
    let ki = window.params.currentShape
    switch(ki) {
      case "barrier":
      handleBarrier()
      break;
      case "square":
      addShape()
      break
      case "ball":
      addShape()
      break
    }
  }
}

function handleDrawModeRelease() {
  if (drawmode === true && window.params.currentShape === "barrier" && isNotInToolbar()) {
    undouGhost()
    createLine()
  }
}

function handleLoopInteractions() {

  if (keyIsPressed === true) {
    if (keyCode === 65) {
      addShape()
    }
  }

}
