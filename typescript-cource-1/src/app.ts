interface Person {
  name: string
  age: number

  greet (phrase: string): void
}

const user: Person = {
  name: 'Max',
  age: 26,
  greet (phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

user.greet('Hi there - I am')