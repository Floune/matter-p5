class Ghostline {
	constructor(x, y, w, t, ex, ey, index) {
		this.index = index 
		this.x = x
		this.y = y
		this.w = w
		this.h = window.params.line.h
		this.t = t
		this.vx = ex - x
		this.vy = ey - y
		this.init()
	}

	update(x, y, w, t, ex, ey,) {
		this.x = x
		this.y = y
		this.w = w
		this.h = window.params.line.h
		this.t = t
		this.vx = ex - x
		this.vy = ey - y
		this.init()
	}

	init() {
		this.draw()
	}

	draw() {
		push()
		translate(this.x, this.y)
		let vectouille = {x: this.vx / 2, y: this.vy / 2}
		translate(vectouille.x, vectouille.y)
		rectMode(CENTER)
		fill("grey")
		strokeWeight(1)
		stroke("grey")
		rotate(this.t)
		rect(0, 0, this.w, this.h)
		pop()
	}
}