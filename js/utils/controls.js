
const ui = document.getElementById('controls')

const controls = [
	{name:'density', type:'all', key: 'density', category:'pparams', min:0, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'friction', type:'all', key: 'friction', category:'pparams' , min:0, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'frictionAir', type:'all', key: 'frictionAir', category:'pparams' , min: 0, max: 1, step: 0.005, defaultValue: 0.00001},
	{name:'restitution', type:'all', key: 'restitution', category:'pparams' , min:0, max: 1, step: 0.1, defaultValue: 1},
	{name:'radius', type:'Circle Body', key: 'r', category:'ball' , min:1, max: 100, step: 1, defaultValue: 10},
	{name:'rect-width', type:'Rectangle Body', key: 'w', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'rect-height', type:'Rectangle Body', key: 'h', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'line-height', type:'line', key: 'h', category:'line' , min:1, max: 50, step: 1, defaultValue: 10},
	{name:'stiffness',type:'constraint',  key: 'stiffness', category:'constraint' , min:0, max: 1, step: 0.01, defaultValue: 0.02},
	{name:'sling-length',type:'constraint',  key: 'length', category:'constraint' , min:0, max: 400, step: 10, defaultValue: 0},
]


controls.map(c => {
	const el = document.createElement('div')
	el.innerHTML = `<label for="${c.name}">${c.name}</label>
	<input type="number" name="${c.name}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.defaultValue}">

	`
	el.addEventListener('input', (e)=>{
		const newVal = e.target.value
		window.params[c.category][c.key] = newVal
		const type = c.type
		updateSelectionParams(c.key, newVal, type)
	})
	ui.appendChild(el)
})


const buttons = document.getElementById('buttons')

const triggers = [
	{label:"help", action:"help", descr:"I need help"},
	{label:"mode_edit", action:"mode", descr:"toogle mode"},
	{label:"locked", action:"lock", descr:"lock/unlock item"},
	{label:"query_builder", action:"freeze", descr:"freeze bodies"},
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
	freeze: () => {toggleStatic()}
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

