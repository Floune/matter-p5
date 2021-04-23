function isShapeClicked() {
  let i = 0;
  let clieck = false
  let actualX = mConstraint.mouse.position.x
  let actualY = mConstraint.mouse.position.y
  let limit = lines.length > balls.length ? lines.length : balls.length
  while(i < limit) {
    if (lines[i]) {
      let verts = lines[i].body.vertices
      if (Vertices.contains(verts, {x: actualX, y: actualY})) {
        selection.push(lines[i])
        clieck = true
        lines[i].selected = !lines[i].selected
      }
    } if (balls[i]) {
      let verts = balls[i].body.vertices
      if (Vertices.contains(verts, {x: actualX, y: actualY})) {
        selection.push(balls[i])
        clieck = true
        balls[i].selected = !balls[i].selected
      }
    }
    i++
  }
  return clieck
}

function getDistance(x1, y1, x2, y2) {
  var xs = x2 - x1,
  ys = y2 - y1;   
  
  xs *= xs;
  ys *= ys;

  return Math.sqrt( xs + ys );
}

function randomColor() {
  let r = random(255); 
  let g = random(255); 
  let b = random(255); 

  return color(r, g, b);
}

function isNotInToolbar() {
  return mouseX > 40
}

function addShape() {
  let l = balls.length
  if (window.params.currentShape === "ball") {
    let item = new Ball(mouseX, mouseY, l)
    balls.push(item);
    handleUndoBuffer(item)
  }
  if (window.params.currentShape === "square") {
    let item = new Square(mouseX, mouseY, l)
    balls.push(item);
    handleUndoBuffer(item)
  }
}

function handleUndoBuffer(item) {
  lastCreatedBuffer.push(item);
}

function selectedBodies() {
  let selection = []
  let limit = lines.length > balls.length ? lines.length : balls.length
  for (let u = 0; u < limit; u++) {
    if (lines[u] && lines[u].selected === true) {
      selection.push(lines[u])
    }
    if (balls[u] && balls[u].selected === true) {
      selection.push(balls[u])
    }
  }
  return selection
}

function linkSelection() {
  let selection = selectedBodies()
  let k = 0
  while (k < selection.length - 1) {
    let distance = getDistance(selection[k].body.position.x, selection[k].body.position.y, selection[k + 1].body.position.x, selection[k + 1].body.position.y);
    let options = {
      bodyA: selection[k].body,
      bodyB: selection[k + 1].body,
      length: distance,
      stiffness: window.params.constraint.stiffness
    }
    let constraint = Constraint.create(options)
    links.push(constraint)
    World.add(world, constraint)
    k++
  }
}

function slingTheWorld() {
  if (drawmode === false) {
    let selection = selectedBodies()
    selection.forEach(item => {
      slingshots.push(new SlingShot(item.body.position.x, item.body.position.y, item.body))
    })
  }
}

function handleSlingShots() {
  slingshots.forEach(sli => {
    if (mConstraint.body && sli.sling.bodyB && sli.sling.bodyB.id === mConstraint.body.id) {
      currentlySlinged = sli
    }
  })
}


