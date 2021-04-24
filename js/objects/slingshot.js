class SlingShot  extends Pin {
    constructor(x, y, body) {
        super(x, y, body)
        this.body.label = "sling"
        this.sound = slingSound
    }

    fly() {
        this.sound.play()
        this.body.bodyB = null
        Composite.remove(world, this.body, true)

    }

    draw() {
        if (this.body.bodyB) {
            stroke("black")
            const posA = this.body.pointA
            const posB = this.body.bodyB.position
            line(posA.x, posA.y, posB.x, posB.y)
        }
    }
}