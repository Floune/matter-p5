
const ui = document.getElementById('controls')

const controls = [
	{name:'density', key: 'density', category:'ball', min:0, max: 1, step: 0.001, defaultValue: 0.005},
	{name:'radius', key: 'r', category:'ball' , min:1, max: 100, step: 1, defaultValue: 10},
	{name:'friction', key: 'friction', category:'ball' , min:0.01, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'frictionAir', key: 'frictionAir', category:'ball' , min:0.00001, max: 1, step: 0.005, defaultValue: 0.00001},
	{name:'restitution', key: 'restitution', category:'ball' , min:0.1, max: 1, step: 0.1, defaultValue: 0.8},

]


const tpls = controls.map(c => {
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
	{label:"lens", action:"circle", descr:"circle"},
	{label:"crop_square", action:"square", descr:"square"},
]

const actions = {
	help: () => {legend = !legend},
	circle: () => {window.params.currentShape = "ball"},
	square: () => {window.params.currentShape = "square";}

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

