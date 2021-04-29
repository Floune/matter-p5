
const uiselection = document.getElementById('controls-selection')

const controlsselection = [
	{name:'density', type:'all', key: 'density', category:'pparams', min:0, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'friction', type:'all', key: 'friction', category:'pparams' , min:0, max: 1, step: 0.01, defaultValue: 0.01},
	{name:'frictionAir', type:'all', key: 'frictionAir', category:'pparams' , min: 0, max: 1, step: 0.005, defaultValue: 0.00001},
	{name:'restitution', type:'all', key: 'restitution', category:'pparams' , min:0, max: 1, step: 0.1, defaultValue: 1},
	{name:'radius', type:'circle', key: 'r', category:'ball' , min:1, max: 100, step: 1, defaultValue: 10},
	{name:'rect-width', type:'Rectangle Body', key: 'w', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'rect-height', type:'Rectangle Body', key: 'h', category:'square' , min:1, max: 300, step: 1, defaultValue: 10},
	{name:'line-height', type:'line', key: 'h', category:'line' , min:1, max: 50, step: 1, defaultValue: 10},
	{name:'stiffness',type:'constraint',  key: 'stiffness', category:'constraint' , min:0, max: 1, step: 0.01, defaultValue: 0.02},
	{name:'sling-length',type:'constraint',  key: 'length', category:'constraint' , min:0, max: 400, step: 10, defaultValue: 0},
]


controlsselection.map(c => {
	const el = document.createElement('div')
	el.innerHTML = `<label for="${c.name}-selection">${c.name}</label>
	<input type="number" name="${c.name}-selection" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.defaultValue}">
	`
	el.addEventListener('input', (e)=>{
		const newVal = e.target.value
		const type = c.type
		updateSelectionParams(c.key, newVal, type)
	})
	uiselection.appendChild(el)
})


