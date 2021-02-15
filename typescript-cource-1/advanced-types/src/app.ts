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