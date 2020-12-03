// strictNullChecks": true => const button = document.querySelector('button')!
// if strictNullChecks": fale => const button = document.querySelector('button'),
const button = document.querySelector('button')!

function buttonMove (message: string) {
  console.log(message)
}
button.addEventListener('click', () => console.log('Thanks God, you did it!!!'))
//"strictBindCallApply": false => button.addEventListener('mousemove', buttonMove.bind('move'))
//"strictBindCallApply": true => button.addEventListener('mousemove', buttonMove.bind(this, 'move'))
button.addEventListener('mousemove', buttonMove.bind(this, 'move'))