class Base {
	constructor(x, y, index) {
		this.params = window.params.pparams
		this.index = index
		this.selected = false
		this.x = x;
		this.y = y;
		this.rotating = false;
	}

	isOffScreen() { 
		return this.body.position.y > height + 200 
	}

	seppuku() {
		World.remove(world, this.body)
	}
}