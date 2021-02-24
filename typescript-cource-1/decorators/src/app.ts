function Logger (logString: string) {
  console.log('Logger Factory')
  return function (constructor: Function): void {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate (template: string, hookId: string) {
  console.log('Template factory')
  return function (constructor: any) {
    console.log('Rendering template')
    const el = document.getElementById(hookId)
    const p = new constructor()

    if (el) {
      el.innerHTML = template
      el.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGER')
@WithTemplate('<h1>My Person Object</h2>', 'app')
class Person {
  name = 'Max'

  constructor () {
    console.log('Creating person object...')
  }
}

const person = new Person()

console.log(person)


//--------
function Log (target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

class Product {
  @Log
  title: string
  private _price: number

  set price (val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive!')
    }
  }

  constructor (t: string, p: number) {
    this.title = t
    this._price = p
  }

  getTax (tax: number) {
    return this._price * (1 + tax)
  }
}