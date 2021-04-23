function lockUnlockItem() {
    let limit = lines.length > balls.length ? lines.length : balls.length
    for (let i = 0; i< limit; i++) {
        if (lines[i] && lines[i].selected === true) {
            lines[i].body.isStatic === false ? Body.setStatic(lines[i].body, true) : Body.setStatic(lines[i].body, false)
        }
        if (balls[i] && balls[i].selected === true) {
            balls[i].body.isStatic === false ? Body.setStatic(balls[i].body, true) : Body.setStatic(balls[i].body, false)
        }
    }
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
