function drawHUD() {

	background(255);

	ground.draw()

	legend && drawLegend() 
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
}

function drawLegend() {
	fill("black")
	text('mouse: draw lines', 45, 20);
	text('space: spawn single ball', 45, 40);
	text('a: spawn chaos', 45, 60);
	text('u: remove last line', 45, 80);
	text('r: reset', 45, 100);
	text('b: reset balls', 45, 120);
	text('b: reset lines', 45, 140);
	text('d: change mode', 45, 160);
	text('s: spin selection', 45, 180);
	text('k: delete selection', 45, 200);
}

function drawInfos() {
	text("balls: " + balls.length, 300, 20)
	text("lines: " + lines.length, 400, 20)
	text(drawmode === true ? "mode: draw" : "mode: interaction", 500, 20)
}

function drawAssets() {

	for (i = 0; i < lines.length; i++) {
		lines[i].draw()
	}

	for (i = 0; i < balls.length; i++) {
		balls[i].draw()
		if (balls[i].isOffScreen()) {
			balls[i].seppuku();
			balls.splice(i, 1)
			i--; // sinon on saute des boulesw
		}
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