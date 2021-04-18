function drawHUD() {

	background(255);

	ground.draw()

	legend === true ? drawLegend() : text('f1: toggle legend', 10, 20);

}

function createLine() {
	let actualX = mConstraint.mouse.position.x
	let actualY = mConstraint.mouse.position.y

	longueur = getDistance(refX, refY, actualX, actualY)  
	var theta = atan2(actualY - refY, actualX - refX);

	let l = new Line(refX, refY, longueur, theta, actualX, actualY);
	l.init()
	lines.push(l)
}

function drawLegend() {
	fill("black")
	textSize(18)
	text('mouse: draw lines', 10, 40);
	text('space: spawn single ball', 10, 60);
	text('a: spawn chaos', 10, 80);
	text('u: undo', 10, 100);
	text('r: reset', 10, 120);
	text('b: reset balls', 10, 140);
	text('b: reset lines', 10, 160);
	text('d: toogle draw mode', 10, 180);
}

function drawAssets() {
	lines.forEach(line => {
		line.draw()
	})

	balls.forEach(balle => {
		balle.draw()
	});
}
