class Line {
	constructor(x, y, w, t, ex, ey) {
		this.x = x
		this.y = y
		this.w = w
		this.h = 3
		this.t = t
		let vx = ex - x
		let vy = ey - y
		let vectouille = {x: vx / 2, y: vy / 2}
		this.body = Bodies.rectangle(x, y, w, this.h)
		Body.setAngle(this.body, this.t)
		Body.translate(this.body, vectouille)
		World.add(world, this.body)
		this.body.isStatic = true
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
		// rect(this.w / 2, 0, this.w, this.h)
		rect(0, 0, this.w, this.h)
		pop()
	}
}