class SlingShot  extends Pin {
    constructor(x, y, body) {
        super(x, y, body)
        this.sound = slingSound
        this.body = Constraint.create(this.options)
        this.body.label = "sling"
        World.add(world, this.body)
        constr.push(this.body)
        handleUndoBuffer(constr)
    }

    fly() {
        this.sound.play()
        let index = extractSelectedIndex(this.body, "slingshot")
        constr.splice(index, 1)
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