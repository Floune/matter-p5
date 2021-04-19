let balls = [];
let lines = [];
let curves = [];

let canvas;
let engine;
let world;

let Engine 		= Matter.Engine,
World 			= Matter.World,
Bodies 			= Matter.Bodies,
Constraint 		= Matter.Constraint,
Vector 			= Matter.Vector,
Mouse 			= Matter.Mouse,
MouseConstraint = Matter.MouseConstraint,
Body 			= Matter.Body

let mConstraint;
let refX, refY;
let legend = false
let drawmode = true
let selected;

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
}
