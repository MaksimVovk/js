# Intersection Types

combine couple types
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

// type ElevatedEmployee = {
  name: string
  privileges: string[]
  startDate: Date
}

# More on Type Guards

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