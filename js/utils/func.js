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
        clieck = true
        lines[i].selected = !lines[i].selected
        if (lines[i].selected === false) {
          let index = extractSelectedIndex(lines[i], "line")
          selection.splice(index, 1)
        } else {
          selection.push(lines[i])
        }
      }
    } if (balls[i]) {
      let verts = balls[i].body.vertices
      if (Vertices.contains(verts, {x: actualX, y: actualY})) {
        clieck = true
        balls[i].selected = !balls[i].selected
        if (balls[i].selected === false) {
          selection.pop(balls[i])
        } else {
          selection.push(balls[i])
        }
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

function isNotInParams() {
  return mouseX < window.innerWidth - 110
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
  let select = []
  let limit = lines.length > balls.length ? lines.length : balls.length
  for (let u = 0; u < limit; u++) {
    if (lines[u] && lines[u].selected === true) {
      select.push(lines[u])
    }
    if (balls[u] && balls[u].selected === true) {
      select.push(balls[u])
    }
  }
  return select
}

function linkSelection() {
  let selection = selectedBodies()
  let k = 0
  if (selection.length === 1) {
    let pinou = new Pin(selection[0].body.position.x, selection[0].body.position.y, selection[0].body)
    pinou.init()
    slingshots.push(pinou)
  }
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
    constr.push(constraint)
    handleUndoBuffer(constraint)
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
    if (mConstraint.body && sli && sli.body && sli.body.bodyB && sli.body.bodyB.id === mConstraint.body.id) {
      currentlySlinged = sli
    }
  })
}

function releaseSlingShotOrNot() {
  if (currentlySlinged && currentlySlinged.body.bodyB && currentlySlinged.body.bodyB.speed > currentlySlinged.body.stiffness * 25 ) {
    let newB
    if (currentlySlinged.body.bodyB.label === "Rectangle Body") {
      newB = new Square(currentlySlinged.body.pointA.x, currentlySlinged.body.pointA.y, balls.length);
    } else if (currentlySlinged.body.bodyB.label === "Circle Body") {
      newB = new Ball(currentlySlinged.body.pointA.x, currentlySlinged.body.pointA.y, balls.length, currentlySlinged.body.bodyB.circleRadius)
    }
    let newSl = new SlingShot(currentlySlinged.body.pointA.x, currentlySlinged.body.pointA.y, newB.body );
    currentlySlinged.fly()
    slingshots.push(newSl)
    balls.push(newB)
  }
}

function updateSelectionParams(key, newVal, type) {
  newVal = parseFloat(newVal)
  if (type === "circle") {

    console.log("circle radius")
    item.body.circleRadius = newVal
  }
}

function updateSelectedBody(item, key, newVal) {
  item.body[key] = newVal
}

function updateSelectedCircle(item, key, newVal) {

}

function updateSelectedSquare(item, key, newVal) {

}

function updateSelectedConstraint(item, key, newVal) {

}
