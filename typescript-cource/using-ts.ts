const button = document.querySelector('button')
const body = document.querySelector('body')
const input1 = document.getElementById('num1')! as HTMLInputElement
const input2 = document.getElementById('num1')! as HTMLInputElement

function add (num1: number, num2: number) {
	return num1 + num2
}

button.addEventListener('click', function () {
	const d = new Date()
	const datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()

	const num1 = +input1.value
	const num2 = +input2.value

	const elem = document.createElement('div')
	elem.style.cssText = 'display: grid; grid-template-columns: 50px 200px 100px; grid-gap: 10px;'
	elem.innerHTML = `<div>${1}</div><div>${datestring}</div><div>${num1 + num2}</div>`
	body.appendChild(elem)
})