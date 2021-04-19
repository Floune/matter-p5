function resetLines() {
  lines.forEach(toDelete => {
    World.remove(world, toDelete.body)
  })
  lines = []
}

function resetBalls() {
  balls.forEach(toDelete => {
    World.remove(world, toDelete.body)
  })
  balls = [];
}

function resetSketch() {
  resetLines()
  resetBalls()
}

function undou() {
  if (lines.length > 0) {
    let toDelete = lines.pop();
    World.remove(world, toDelete.body);
  }
}

function removeSelection() {
  if (selected!== false) {
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

