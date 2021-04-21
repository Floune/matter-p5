function enableMouse() {
  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()
  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasmouse
  })
}

function mousePressed() {
  if (drawmode === true) {
    handleDrawModeClic()
  } else {
    handleInteractionModeClic()
  }
}

function mouseReleased() {
  if (drawmode === true) {
    handleDrawModeRelease()
  }
}

function mouseDragged() {
  if (drawmode === true && window.params.currentShape === "barrier") {
    let ghost = lines[lines.length - 1]
    let actualX = mConstraint.mouse.position.x
    let actualY = mConstraint.mouse.position.y

    longueur = getDistance(refX, refY, actualX, actualY)  
    var theta = atan2(actualY - refY, actualX - refX);

    ghost.update(refX, refY, longueur, theta, actualX, actualY)
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
      toggleRotation()
      break;
    // k
    case 75:
      removeSelection()
      break;
  }

}

function handleInteractionModeClic() {
  if (isNotInToolbar() === true) {
    deselectAll()
    selected = isShapeClicked()
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


function deselectAll() {
  lines.forEach(line => {
    line.selected = false;
  })
}

function toggleRotation() {
  lines.forEach(line => {
    if (line.selected === true) {
      line.handleRot()
    }
  })
}

function toggleDraw() {
  drawmode = !drawmode
  document.body.classList.contains("interaction") ? document.body.classList.remove("interaction") : document.body.classList.add("interaction")
}



function handleLoopInteractions() {

  if (keyIsPressed === true) {
    if (keyCode === 65) {
      addShape()
    }
  }

}

function addShape() {
  let l = balls.length
  if (window.params.currentShape === "ball") {
    balls.push(new Ball(mouseX, mouseY, l));
  }
  if (window.params.currentShape === "square") {
    balls.push(new Square(mouseX, mouseY, l));
  }
}
