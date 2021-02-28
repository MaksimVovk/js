function Logger (logString: string) {
  console.log('Logger Factory')
  return function (constructor: Function): void {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate (template: string, hookId: string) {
  console.log('Template factory')
  return function<T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor (..._: any[]) {
        super()
        console.log('Rendering template')
        const el = document.getElementById(hookId)
        // const p = new originalConstructor()

        if (el) {
          el.innerHTML = template
          el.querySelector('h1')!.textContent = this.name
        }

      }
    }
  }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGER')
@WithTemplate('<h1>My Person Object</h1>', 'app')
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

function Log2 (target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3 (target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4 (target: any, name: string, position: number) {
  console.log('Parameter decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
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

  @Log3
  getTax (@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

function Autobind (_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get () {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjDescriptor
}

class Print {
  message = 'This work!'

  @Autobind
  showMessage() {
    console.log(this.message)
  }
}

const button = document.querySelector('button')!
const p = new Print()

button.addEventListener('click', p.showMessage)