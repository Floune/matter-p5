let balls 		= [];
let lines 		= [];
let slingshots 	= [];

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
let refX, refY;
let mConstraint;
let selected;
let selection = []
let currentlySlinged = null;
let legend 		= false
let drawmode 	= false
let gravity 	= true
let gridMode	= false
let links 		= []
let gridGap		= 50;

window.params = {
	currentShape: "ball",
	pparams: {
		density: 0.05,
		friction: 0.01,
		frictionAir: 0.00001,
		restitution: 0.8,
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
	}
}
