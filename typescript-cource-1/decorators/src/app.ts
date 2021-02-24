function Logger (logString: string) {
  return function (constructor: Function): void {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate (template: string, hookId: string) {
  return function (constructor: any) {
    const el = document.getElementById(hookId)
    const p = new constructor()

    if (el) {
      el.innerHTML = template
      el.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h2>', 'app')
class Person {
  name = 'Max'

  constructor () {
    console.log('Creating person object...')
  }
}

const person = new Person()

console.log(person)