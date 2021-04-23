
class Boundary {
	constructor(x, y, w, h, vx, vy) {
		this.h = h
		this.x = x
		this.y = y
		this.w = w
		this.vx = vx
		this.vy = vy
		this.color = "black"
	}
	init() {
		this.createBody()
		this.alignSomehow()
	}

	createBody() {
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, window.params.pparams)
		World.add(world, this.body)
		this.body.isStatic = true		
	}

	alignSomehow() {
		let vectouille = {x: this.vx / 2, y: this.vy / 2}
		Body.translate(this.body, vectouille)
	}

	draw() {
		let pos = this.body.position;
		let angle = this.body.angle;
		push()
		translate(pos.x, pos.y)
		rectMode(CENTER)
		fill(this.color)
		stroke(this.color)
		rotate(angle)
		rect(0, 0, this.w, this.h)
		pop()
	}
}