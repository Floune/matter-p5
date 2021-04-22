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
}

function resetSketch() {
  resetLines()
  resetBalls()
  resetConstraints()
}

function undou() {
  if (lines.length > 0) {
    let toDelete = lines.pop();
    World.remove(world, toDelete.body);
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
  if (selected !== false) {
    World.remove(world, selected.body)
    let index = extractSelectedIndex()
    lines.splice(index, 1)
    selected = false
  }
}

function extractSelectedIndex() {
  let i = 0;
  let ret;
  while (i < lines.length) {
    if (selected.index === lines[i].index) {
      ret = i
    }
    i++;
  }
  return ret;
}

function deselectAll() {
  selected = null;
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

