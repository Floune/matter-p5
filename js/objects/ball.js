class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.r = 20
		this.color = this.randomColor()
		this.body = Bodies.circle(this.x, this.y, this.r, {
			density: 0.04,
			friction: 0.03,
			frictionAir: 0.00001,
			restitution: 0.8,
		})
		Matter.Body.setMass(this.body, 16)
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
		ellipse(0, 0, this.r)
		pop()
	}

	randomColor() {
		let r = random(255); 
		let g = random(255); 
		let b = random(255); 

		return color(r, g, b);
	}
}
