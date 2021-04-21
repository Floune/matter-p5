class Line {
	constructor(x, y, w, t, ex, ey, i) {
		this.index = i
		this.x = x
		this.y = y
		this.w = w
		this.h = 10
		this.t = t
		this.vx = ex - x
		this.vy = ey - y
		this.selected = false
		this.rot = 0
	}

	handleRot() {
		if(this.rot === 0) {
			this.rot = 0.01
		}
		else if(this.rot === 0.01) {
			this.rot = -0.01
		}
		else if(this.rot === -0.01) {
			this.rot = 0
		}

	}

	init() {
		this.createBody()
		this.alignSomehow()
	}

	createBody() {
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h)
		this.body.isStatic = !gravity
		World.add(world, this.body)
	}

	alignSomehow() {
		let vectouille = {x: this.vx / 2, y: this.vy / 2}
		Body.setAngle(this.body, this.t)
		Body.translate(this.body, vectouille)
	}

	draw() {
		Body.rotate(this.body, this.rot)
		let pos = this.body.position;
		let angle = this.body.angle;
		push()
		translate(pos.x, pos.y)
		rectMode(CENTER)
		fill("black")
		this.selected === true ? strokeWeight(3) : strokeWeight(1)
		this.selected === true ? stroke("red") : stroke("black")
		rotate(angle)
		rect(0, 0, this.w, this.h)
		pop()
	}
}