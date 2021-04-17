
class Ground {
	constructor() {
		this.h = 20
		this.x = 0
		this.y = height - this.h
		this.w = window.innerWidth
		let vx = window.innerWidth - this.x
		let vy = window.innerHeight - this.y
		let vectouille = {x: vx / 2, y: vy / 2}
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h)
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
		rect(0, 0, this.w, this.h)
		pop()
	}
}