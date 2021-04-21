class Ball extends Base {
	constructor(x, y, index) {
		super(x, y, index)
		const ballParams = window.params.pparams
		this.r = window.params.ball.r
		this.color = randomColor()
		this.body = Bodies.circle(this.x, this.y, this.r, ballParams)
		this.body.isStatic = !gravity
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
