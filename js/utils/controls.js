
const ui = document.getElementById('controls')

const controls = [
	{name:'b-density', key: 'density', category:'ball', min:0, max: 1, step: 0.001, defaultValue: 0.005},
	{name:'b-radius', key: 'r', category:'ball' , min:1, max: 100, step: 1, defaultValue: 10},
	{name:'b-friction', key: 'friction', category:'ball' , min:0.01, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'b-frictionAir', key: 'frictionAir', category:'ball' , min:0.00001, max: 1, step: 0.005, defaultValue: 0.00001},
	{name:'b-restitution', key: 'restitution', category:'ball' , min:0.1, max: 1, step: 0.1, defaultValue: 0.8},
	{name:'s-density', key: 'density', category:'square', min:0, max: 1, step: 0.001, defaultValue: 0.005},
	{name:'s-width', key: 'w', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'s-height', key: 'h', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'s-friction', key: 'friction', category:'square' , min:0.01, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'s-frictionAir', key: 'frictionAir', category:'square' , min:0.00001, max: 1, step: 0.005, defaultValue: 0.00001},
	{name:'s-restitution', key: 'restitution', category:'square' , min:0.1, max: 1, step: 0.1, defaultValue: 0.8},

]


controls.map(c => {
	const el = document.createElement('div')
	el.innerHTML = `<label>${c.name}</label>
	<input type="range" name="${c.name}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.defaultValue}">
	<span display>${c.defaultValue}</span>

	`
	el.addEventListener('input', (e)=>{
		const newVal = e.target.value
		el.querySelector('span').innerHTML = newVal
		window.params[c.category][c.key] = newVal
	})
	ui.appendChild(el)
})


const buttons = document.getElementById('buttons')

const triggers = [
	{label:"help", action:"help", descr:"I need help"},
	{label:"mode_edit", action:"mode", descr:"toogle mode"},
	{label:"cached", action:"spin", descr:"spin selection"},
	{label:"horizontal_rule", action:"barrier", descr:"barrier"},
	{label:"circle", action:"circle", descr:"circle"},
	{label:"crop_square", action:"square", descr:"square"},
]

const actions = {
	help: () => {legend = !legend},
	circle: () => {window.params.currentShape = "ball"},
	square: () => {window.params.currentShape = "square";},
	barrier: () => {window.params.currentShape = "barrier";},
	mode: () => {drawmode = !drawmode},
	spin: () => {toogleRotation()},
}


triggers.map(t => {
	const btn = document.createElement('button')
	btn.title = t.descr
	btn.innerHTML = `<span class="material-icons">${t.label}</span>`
	buttons.appendChild(btn)

	btn.addEventListener('click', ()=>{
		actions[t.action]()
	})
})

