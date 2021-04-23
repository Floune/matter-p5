class SlingShot  extends Pin {
    constructor(x, y, body) {
        super(x, y, body)
        this.options.label = "sling"
        this.sound = slingSound
        this.sling = Constraint.create(this.options)
        World.add(world, this.sling)
    }

    fly() {
        this.sound.play()
        this.sling.bodyB = null
        Composite.remove(world, this.sling, true)
        slingshots.pop()
    }

    draw() {
        if (this.sling.bodyB) {
            stroke("black")
            const posA = this.sling.pointA
            const posB = this.sling.bodyB.position
            line(posA.x, posA.y, posB.x, posB.y)
        }
    }
}