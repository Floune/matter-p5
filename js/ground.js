
class Ground {
	constructor() {
		this.h = 20
		this.x = 0
		this.y = height - this.h
		this.w = window.innerWidth
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h)
		World.add(world, this.body)		
		this.body.isStatic = true
	}

	draw() {
		let pos = this.body.position;
		let angle = this.body.angle;
		push()
		translate(pos.x, pos.y)
		fill("black")
		stroke("black")
		strokeWeight(7)
		rect(0, 0, this.w, this.h)
		pop()
	}
}