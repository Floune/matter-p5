class Line {
	constructor(x, y, w, t, ex, ey) {
		this.x = x
		this.y = y
		this.w = w
		this.h = 5
		this.t = t
		this.vx = ex - x
		this.vy = ey - y
	}

	init() {
		this.createBody()
		this.alignSomehow()
	}

	createBody() {
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h)
		World.add(world, this.body)
		this.body.isStatic = true		
	}

	alignSomehow() {
		let vectouille = {x: this.vx / 2, y: this.vy / 2}
		Body.setAngle(this.body, this.t)
		Body.translate(this.body, vectouille)
	}

	draw() {
		let pos = this.body.position;
		let angle = this.body.angle;
		push()
		translate(pos.x, pos.y)
		rectMode(CENTER)
		fill("black")
		stroke("black")
		rotate(angle)
		rect(0, 0, this.w, this.h)
		pop()
	}
}