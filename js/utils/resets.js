function resetLines() {
  lines.forEach(toDelete => {
    Composite.remove(world, toDelete.body, true)
  })
  lines = []
}

function resetBalls() {
  balls.forEach(toDelete => {
    Composite.remove(world, toDelete.body, true)
  })
  balls = [];
}

function resetConstraints() {
  world.constraints.forEach(toDelete => {
    if (toDelete.label !== "Mouse Constraint")
      Composite.remove(world, toDelete, true)
  })
  links = []
  slingshots = []
}

function resetSketch() {
  resetLines()
  resetBalls()
  resetConstraints()
}

function undou() {
  let item = lastCreatedBuffer.pop()
  if (item) {
    if (item.body.label === "line") {
      let index = extractSelectedIndex(item, "line")
      Composite.remove(world, item.body);
      lines.splice(index, 1)
    } else if (item.body.label === "Circle Body" || item.body.label === "Rectangle Body") {
      let index = extractSelectedIndex(item, "ball")
      Composite.remove(world, item.body);
      balls.splice(index, 1)
    }
  }

}

function undouGhost() {
  if (lines.length > 0) {
    let toDelete = lines[lines.length - 1];
    if (toDelete.index === "x") {
      lines.pop()
    }
  }
}

function removeSelection() {
  if (selection.length > 0) {
    selection.forEach(item => {
      if (item.body.label === "line") {
        World.remove(world, item.body)
        let index = extractSelectedIndex(item, "line")
        lines.splice(index, 1)
      } else if (item.body.label === "Rectangle Body" || item.body.label === "Circle Body") {
        World.remove(world, item.body)
        let index = extractSelectedIndex(item, "ball")
        balls.splice(index, 1)
      }

    })
    selection = []
  }
}

function extractSelectedIndex(item, type) {
  let i = 0;
  let j = 0;
  let ret;
  if (type === "line") {
    while (i < lines.length) {
      if (item.index === lines[i].index) {
        ret = i
      }
      i++;
    }
  } else if (type === "ball") {
    while (j < balls.length) {
      if (item.index === balls[j].index) {
        ret = j
      }
      j++;
    }
  }

  return ret;
}

function deselectAll() {
  selection = []
  let limit = lines.length > balls.length ? lines.length : balls.length
  for (let i = 0; i < limit; i++) {
    if (lines[i]) {
      lines[i].selected = false;
    }
    if (balls[i]) {
      balls[i].selected = false;
    }
  }
}

