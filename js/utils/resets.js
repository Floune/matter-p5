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

