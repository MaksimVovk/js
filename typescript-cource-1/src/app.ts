class Department {
  name: string
  private employees: string[] = []

  constructor (n: string) {
    this.name = n
  }

  log (this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployee (employee: string) {
    this.employees = [...this.employees, employee]
  }

  printEmpleyessInformation () {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')

accounting.log()
accounting.addEmployee('Max')
accounting.addEmployee('Alex')
// accounting.employees[2] = 'Manu' //Property 'employees' is private and only accessible within class 'Department'.
accounting.printEmpleyessInformation()

// const accountingCopy = { name: 'Copy of Accounting', log: accounting.log }

// accountingCopy.log()