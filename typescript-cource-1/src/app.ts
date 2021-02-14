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
  constructor (id: string, private reports: string[]) {
    super(id, 'Accounting')
  }
  addEmployee (name: string) {
    if (name === 'Max') {
      return
    }

    this.employees = [...this.employees, name]
  }

  addReports (text: string) {
    this.reports = [...this.reports, text]
  }

  printReports() {
    console.log(this.reports)
  }
}

const accounting = new AccountingDepartment('d2', [])
const it = new ITDepartment('d1', ['Max'])

console.log(accounting)
accounting.log()
accounting.addEmployee('Max')
accounting.addEmployee('Alex')
accounting.addReports('Something went wrong!')
accounting.printReports()

it.addEmployee('Alex')
it.addEmployee('Max')
it.printEmpleyessInformation()
// accounting.employees[2] = 'Manu' //Property 'employees' is private and only accessible within class 'Department'.
console.log(it)

// const accountingCopy = { name: 'Copy of Accounting', log: accounting.log }

// accountingCopy.log()