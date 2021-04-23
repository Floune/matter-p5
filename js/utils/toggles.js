function lockUnlockselection() {
  console.log("qsfqdf")
  selection.forEach(item => {
      item.body.isStatic === true ? Body.setStatic(item.body, false) : Body.setStatic(item.body, true)
  })
}

function toggleGrid() {
    gridMode = !gridMode
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

function toggleLegend() {
    legend = !legend
}

function toggleGravity() {
    engine.world.gravity.y = engine.world.gravity.y === 0 ? 1 : 0;
}

function toggleBox() {
    boxMode = !boxMode
    if (boxMode === true) {
        ceiling.init()
        boundaries.push(ceiling)
        leftWall.init()
        boundaries.push(leftWall)
        rightWall.init()
        boundaries.push(rightWall)
    } else if (boxMode === false) {
        boundaries.forEach(boundary => {
            World.remove(world, boundary.body)
        })
        boundaries = []
        ground.init()
        boundaries.push(ground)
    }
}
