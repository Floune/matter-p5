let balls 		= [];
let lines 		= [];
let slingshots 	= [];
let boundaries	= [];

let Engine 		= Matter.Engine,
World 			= Matter.World,
Bodies 			= Matter.Bodies,
Vertices		= Matter.Vertices,
Constraint 		= Matter.Constraint,
Vector 			= Matter.Vector,
Mouse 			= Matter.Mouse,
MouseConstraint = Matter.MouseConstraint,
Composites		= Matter.Composites,
Composite		= Matter.Composite,
Body 			= Matter.Body

let canvas;
let engine;
let world;
let ground = new Boundary(-60, window.innerHeight + 60, window.innerWidth + 120, 60, window.innerWidth + 60, window.innerHeight - window.innerHeight - 60)
let ceiling = new Boundary(-60, -60, window.innerWidth, 60, window.innerWidth + 120, 60)
let leftWall = new Boundary(0, -60, 60, window.innerHeight + 120, -60, window.innerHeight + 60)
let rightWall = new Boundary(window.innerWidth, -60,  60, window.innerHeight + 120, 60, window.innerHeight + 120)
let refX, refY;
let mConstraint;
let selected = false;
let selection = []
let currentlySlinged = null;
let legend 		= false
let drawmode 	= false
let gravity 	= true
let gridMode	= false
let links 		= []
let gridGap		= 50;
let slingSound
let boxMode = false

window.params = {
	currentShape: "ball",
	pparams: {
		density: 0.05,
		friction: 0.01,
		frictionAir: 0.00001,
		restitution: 1,
	},
	ball: {
		r: 10,
	},
	square: {
		w: 50,
		h: 50,
	},
	line: {
		h: 8
	},
	constraint: {
		stiffness: 0.4
	},
}
