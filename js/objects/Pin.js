class Pin {
    constructor(x, y, body) {
        this.options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: window.params.constraint.stiffness,
            length: window.params.constraint.length,
        }
        this.options.label = "pin"
        this.sound = slingSound
        this.body = Constraint.create(this.options)
        World.add(world, this.body)
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