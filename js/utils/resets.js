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
