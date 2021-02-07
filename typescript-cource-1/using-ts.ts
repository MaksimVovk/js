const button = document.querySelector('button')
const input1 = document.getElementById('num1')! as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement

function add (num1: number , num2: number ) {
  return num1 + num2
}

function handler () {
  const { value: n1 } = input1
  const { value: n2 } = input2

  console.log(add(+n1, +n2))
}

button.addEventListener('click', handler)