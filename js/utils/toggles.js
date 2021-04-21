function toggleGravity() {
    gravity = !gravity
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
