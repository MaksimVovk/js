abstract class Department {
  static currentYear = '2021'
  // private readonly id: string
  // private name: string
  protected employees: string[] = []

  constructor (readonly id: string, public name: string) {
    // this.id = id
    // this.name = name
    console.log(Department.currentYear)
  }

  abstract log (this: Department): void

  addEmployee (employee: string) {
    // this.id = 'd2' //Cannot assign to 'id' because it is a read-only property.
    this.employees = [...this.employees, employee]
  }

  printEmpleyessInformation () {
    console.log(this.name)
    console.log(this.employees.length)
    console.log(this.employees)
  }

  static createEmployee (name: string) {
    return { name }
  }
}

class ITDepartment extends Department {
  admins: string[]

  constructor (id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }

  log () {
    console.log('IT department id: ' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  get mostRecentReport () {
    if (this.lastReport) {
      return this.lastReport
    }

    throw new Error ('No report Found')
  }

  set mostRecentReport (value: string) {
    if (!value) {
      throw new Error ('Please pass in a valid value')
    }

    this.addReports(value)
  }

  constructor (id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }
  addEmployee (name: string) {
    if (name === 'Max') {
      return
    }

    this.employees = [...this.employees, name]
  }

  addReports (text: string) {
    this.reports = [...this.reports, text]
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }

  log () {
    console.log('Accounting Department id: ' + this.id)
  }
}

// Department
const newEmployee = Department.createEmployee('Max')
console.log('New Employee', newEmployee)
console.log('current year', Department.currentYear)

console.log('-------------------------------------')
// Accounting department
const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = 'Year end report'
accounting.addReports('Something went wrong!')
accounting.addEmployee('Max')
accounting.addEmployee('Alex')
accounting.printReports()
accounting.log()

console.log(accounting)
console.log(accounting.mostRecentReport)

// accounting.employees[2] = 'Manu' //Property 'employees' is private and only accessible within class 'Department'.
// const accountingCopy = { name: 'Copy of Accounting', log: accounting.log }

// accountingCopy.log()
console.log('-------------------------------------')
// IT department
const it = new ITDepartment('d1', ['Max'])
it.addEmployee('Alex')
it.addEmployee('Max')
it.printEmpleyessInformation()
it.log()
console.log(it)
