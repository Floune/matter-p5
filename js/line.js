class Line {
	constructor(x, y, w, t) {
		this.x = x
		this.y = y
		this.w = w
		this.h = 9
		this.t = t
		this.body = Bodies.rectangle(x, y, w, this.h)
		Body.rotate(this.body, this.t)
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
		rect(0, 0, this.w, this.h)
		pop()
	}
}