const button = document.querySelector('button')!

function clickHandler (message: string) {
  // const name = 'Max'
  console.log('Clicked' + message)
}
button.addEventListener('click', clickHandler.bind(null, 'message'))

