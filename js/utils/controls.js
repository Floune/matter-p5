
const ui = document.getElementById('controls')

const controls = [
	{name:'density', key: 'density', category:'pparams', min:0, max: 0.01, step: 0.001, defaultValue: 0.001},
	{name:'friction', key: 'friction', category:'pparams' , min:0, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'frictionAir', key: 'frictionAir', category:'pparams' , min: 0, max: 1, step: 0.005, defaultValue: 0.00001},
	{name:'restitution', key: 'restitution', category:'pparams' , min:0.1, max: 1, step: 0.1, defaultValue: 1},
	{name:'circle-radius', key: 'r', category:'ball' , min:1, max: 100, step: 1, defaultValue: 10},
	{name:'rect-width', key: 'w', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'rect-height', key: 'h', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'line-height', key: 'h', category:'line' , min:1, max: 50, step: 1, defaultValue: 10},
	{name:'stiffness', key: 'stiffness', category:'constraint' , min:0, max: 1, step: 0.1, defaultValue: 0.2},
	{name:'sling-length', key: 'length', category:'constraint' , min:0, max: 400, step: 10, defaultValue: 0},
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
	{label:"locked", action:"lock", descr:"lock/unlock item"},
	{label:"south", action:"gravity", descr:"toggle gravity"},
	{label:"calendar_view_month", action:"grid", descr:"toggle grid"},
	{label:"picture_in_picture", action:"box", descr:"toggleBox"},
	{label:"cached", action:"spin", descr:"spin selection"},
	{label:"share", action:"link", descr:"link shapes"},
	{label:"upgrade", action:"slingshot", descr:"slingshot!"},
	{label:"horizontal_rule", action:"barrier", descr:"barrier"},
	{label:"circle", action:"circle", descr:"circle"},
	{label:"panorama_wide_angle_select", action:"square", descr:"square"},
]

const actions = {
	help: () => {legend = !legend},
	circle: () => {window.params.currentShape = "ball"},
	square: () => {window.params.currentShape = "square";},
	barrier: () => {window.params.currentShape = "barrier";},
	mode: () => {toggleDraw()},
	spin: () => {toggleRotation()},
	lock: () => {lockUnlockselection()},
	grid: () => {toggleGrid()},
	link: () => {linkSelection()},
	slingshot: () => {slingTheWorld()},
	gravity: () => {toggleGravity()},
	box: () => {toggleBox()},
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

