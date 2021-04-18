let balls = [];
let lines = [];

let canvas;
let engine;
let world;

let Engine 			= Matter.Engine,
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
