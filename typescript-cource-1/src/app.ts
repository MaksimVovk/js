class Department {
  // private readonly id: string
  // private name: string
  protected employees: string[] = []

  constructor (private readonly id: string, public name: string) {
    // this.id = id
    // this.name = name
  }

  log (this: Department) {
    console.log(`Departmnet ${this.id}: ${this.name}`)
  }

  addEmployee (employee: string) {
    // this.id = 'd2' //Cannot assign to 'id' because it is a read-only property.
    this.employees = [...this.employees, employee]
  }

  printEmpleyessInformation () {
    console.log(this.name)
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]

  constructor (id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
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
}

const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = 'Year end report'
accounting.addReports('Something went wrong!')
console.log(accounting)
accounting.addEmployee('Max')
accounting.addEmployee('Alex')
accounting.printReports()
console.log(accounting.mostRecentReport)

const it = new ITDepartment('d1', ['Max'])
it.addEmployee('Alex')
it.addEmployee('Max')
it.printEmpleyessInformation()
// accounting.employees[2] = 'Manu' //Property 'employees' is private and only accessible within class 'Department'.
console.log(it)

// const accountingCopy = { name: 'Copy of Accounting', log: accounting.log }

// accountingCopy.log()