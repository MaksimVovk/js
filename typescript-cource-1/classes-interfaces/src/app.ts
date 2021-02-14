// type AddFn = (n1: number, n2: number) => number
interface AddFn {
  (n1: number, n2: number): void
}

let add: AddFn

add = (n1: number, n2: number) => n1 + n2

interface Named {
  readonly name?: string
  // name: string
}

interface Greetable extends Named {
  greet (phrase: string): void
}

class Person implements Greetable {
  name?: string
  age = 30

  constructor (n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet (phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi!')
    }
  }
}

const user = new Person()
// const user = new Person('Max')

user.greet('Hi there - I am')