class Ball {
	constructor(x, y) {
		const ballParams = window.params.pparams
		this.x = x;
		this.y = y;
		this.r = window.params.ball.r
		this.color = randomColor()
		this.body = Bodies.circle(this.x, this.y, this.r, ballParams)
		World.add(world, this.body)		
	}
	
	draw() {
		let pos = this.body.position;
		let angle = this.body.angle;
		push()
		translate(pos.x, pos.y)
		rotate(angle)
		rectMode(CENTER)
		fill(this.color)
		stroke("black")
		ellipse(0, 0, this.r * 1.8)
		pop()
	}

}
