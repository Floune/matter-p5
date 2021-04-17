
class Ground {
	constructor() {
		this.h = 30
		this.x = 0
		this.y = height - this.h
		this.w = window.innerWidth
		this.vx = window.innerWidth - this.x
		this.vy = window.innerHeight - this.y
		this.color = "black"
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