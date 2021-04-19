class Ball {
	constructor(x, y) {
		const {r, ...ballParams} = window.params.ball
		this.x = x;
		this.y = y;
		this.r = r
		this.color = this.randomColor()
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

	randomColor() {
		let r = random(255); 
		let g = random(255); 
		let b = random(255); 

		return color(r, g, b);
	}
}
