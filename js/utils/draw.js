function drawHUD() {
	background(255);
	if (gridMode === true) {drawGrid()}


	legend && drawLegend()

	drawInfos()

}

function debug(bass) {

}

function createLine() {
	let actualX = mConstraint.mouse.position.x
	let actualY = mConstraint.mouse.position.y

	longueur = getDistance(refX, refY, actualX, actualY)  
	var theta = atan2(actualY - refY, actualX - refX);
	
	let l = new Line(refX, refY, longueur, theta, actualX, actualY, lines.length);
	l.init()
	lines.push(l)
}

function drawLegend() {
	fill("black")
	text('mouse: draw lines', 45, 20);
	text('space: spawn single ball', 45, 40);
	text('a: spawn chaos', 45, 60);
	text('r: reset', 45, 100);
	text('b: reset balls', 45, 120);
	text('b: reset lines', 45, 140);
	text('u: remove last line', 45, 80);
	text('k: delete selected line (just one)', 45, 160);
	text('s: spin selection', 45, 180);
	text('d: toggle mode', 45, 200);
	text('g: unlock selection', 45, 220);
	text('z: toggle grid', 45, 240);
	text('e: link selection', 45, 260);
	text('c: remove links', 45, 280);
}

function drawInfos() {
	text(boxMode === true ? "box" : "open", 200, 20)
	text("balls: " + balls.length, 300, 20)
	text("lines: " + lines.length, 400, 20)
	text(engine.world.gravity.y === 1 ? "gravity" : "no gravity", 500, 20)
	text(drawmode === true ? "mode: draw" : "mode: interaction", 600, 20)

}

function drawAssets() {

	for (let i = 0; i < boundaries.length; i++) {
		boundaries[i].draw()
	}

	for (let i = 0; i < lines.length; i++) {
		lines[i].draw()
	}

	for (let i = 0; i < balls.length; i++) {
		balls[i].draw()
		if (balls[i].isOffScreen()) {
			balls[i].seppuku();
			balls.splice(i, 1)
			i--; // sinon on saute des boulesw
		}
	}

	for (let i = 0; i < links.length; i++) {
		if (links[i].label !== "Mouse Constraint") {
			line(links[i].bodyA.position.x, links[i].bodyA.position.y, links[i].bodyB.position.x, links[i].bodyB.position.y)
		}
	}

	for (let i = 0; i < slingshots.length; i++) {
		slingshots[i].draw()
	}
}

function handleBarrier() {
	refX = mConstraint.mouse.position.x
	refY = mConstraint.mouse.position.y
	
	let actualX = mConstraint.mouse.position.x
	let actualY = mConstraint.mouse.position.y

	longueur = getDistance(refX, refY, actualX, actualY)  
	var theta = atan2(actualY - refY, actualX - refX);

	let l = new Ghostline(refX, refY, longueur, theta, actualX, actualY, "x");
	l.init()
	lines.push(l)
}

function drawGrid() {
	let u = 0
	stroke("grey")
	strokeWeight(1)
	while(u < window.innerWidth) {
		line(0, u, width, u)
		line(u, 0, u, height)
		u += gridGap
	}
}