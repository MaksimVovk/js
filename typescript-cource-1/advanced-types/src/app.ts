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