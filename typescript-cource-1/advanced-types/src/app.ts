type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// Example wit interfaces
// interface Admin {
//   name: string
//   privileges: string[]
// }

// interface Employee {
//   name: string
//   startDate: Date
// }

type ElevatedEmployee = Admin & Employee

// interface ElevatedEmployee extends Admin, Employee {}

const employee: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number

type Universal = Combinable & Numeric

function add (n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString()
  }

  return n1 + n2
}

type UnknowEmployee = Employee | Admin

function printUnknowEmployee (emp: UnknowEmployee) {
  console.log('Name: ' + emp.name)

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges)
  }

  if ('startDate' in emp) {
    console.log('startDate: ' + emp.startDate)
  }
}

printUnknowEmployee(employee)

console.log('------------------------------------------------------------')

class Car {
  drive () {
    console.log('Driving...')
  }
}

class Truck {
  drive () {
    console.log('Driving a truck...')
  }

  loadCargo (amount: number) {
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car
const v2 = new Truck

function useVehicle (vehicle: Vehicle) {
  vehicle.drive()

  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)

console.log('------------------------------------------------------------')

interface Bird {
  type: 'bird'
  flySpeed: number
}

interface Horse {
  type: 'horse'
  runSpeed: number
}

class BirdClass implements Bird {
  type: 'bird'
  flySpeed: number

  constructor (flySpeed: number) {
    this.flySpeed = flySpeed
    this.type = 'bird'
  }
}

class HorseClass implements Horse {
  type: 'horse'
  runSpeed: number

  constructor (runSpeed: number) {
    this.runSpeed = runSpeed
    this.type = 'horse'
  }
}

const bird = new BirdClass(30)
const horse = new HorseClass(30)

type Animal = Bird | Horse

function moveAnimal (animal: Animal) {
  let speed: number

  switch (animal.type) {
    case 'bird':
      speed = animal.flySpeed
      break
    case 'horse':
      speed = animal.runSpeed
      break
  }

  console.log(animal.type + ' ' + 'moving at speed: ' + speed)
}

moveAnimal(bird)
moveAnimal(horse)

// const userInput = <HTMLInputElement>document.getElementById('user-input')!
const userInput = document.getElementById('user-input')
const paragraph = document.getElementById('message-output')! as HTMLParagraphElement

// userInput.value = 'Hi there!'
paragraph.innerText = 'Paragraph text'

if (userInput) {
  (userInput as HTMLInputElement).value = 'Hi there!'
}

interface ErrorContainer { //{ email: 'Not a valid email', username: 'Must start with character' }
  [props: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with character'
}