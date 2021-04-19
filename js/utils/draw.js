function drawHUD() {

	background(255);

	ground.draw()

	legend === true ? drawLegend() : text('f1: help', 10, 20);
	drawInfos()
}

function createLine() {
	let actualX = mConstraint.mouse.position.x
	let actualY = mConstraint.mouse.position.y

	longueur = getDistance(refX, refY, actualX, actualY)  
	var theta = atan2(actualY - refY, actualX - refX);

	let l = new Line(refX, refY, longueur, theta, actualX, actualY, lines.length);
	l.init()
	lines.push(l)
  console.log(lines)

}

function drawLegend() {
	fill("black")
	text('f1: help', 10, 20)
	text('mouse: draw lines', 10, 40);
	text('space: spawn single ball', 10, 60);
	text('a: spawn chaos', 10, 80);
	text('u: remove last line', 10, 100);
	text('r: reset', 10, 120);
	text('b: reset balls', 10, 140);
	text('b: reset lines', 10, 160);
	text('d: change mode', 10, 180);
	text('s: spin selection', 10, 200);
	text('k: delete selection', 10, 220);
}

function drawInfos() {
	text("balls: " + balls.length, 300, 20)
	text("lines: " + lines.length, 400, 20)
	text(drawmode === true ? "mode: draw" : "mode: interaction", 500, 20)
}

function drawAssets() {
	lines.forEach(line => {
		line.draw()
	})

	balls.forEach(balle => {
		balle.draw()
	});
}
