class SlingShot {
    constructor(x, y, body) {
        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: window.params.constraint.stiffness,
            length: 20,
            label: "sling"
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }

    fly() {
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