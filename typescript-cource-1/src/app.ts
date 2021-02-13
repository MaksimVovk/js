class Department {
  // private id: string
  // private name: string
  private employees: string[] = []

  constructor (private id: string, public name: string) {
    // this.id = id
    // this.name = name
  }

  log (this: Department) {
    console.log(`Departmnet ${this.id}: ${this.name}`)
  }

  addEmployee (employee: string) {
    this.employees = [...this.employees, employee]
  }

  printEmpleyessInformation () {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('d1', 'Accounting')

accounting.log()
accounting.addEmployee('Max')
accounting.addEmployee('Alex')
// accounting.employees[2] = 'Manu' //Property 'employees' is private and only accessible within class 'Department'.
accounting.printEmpleyessInformation()

// const accountingCopy = { name: 'Copy of Accounting', log: accounting.log }

// accountingCopy.log()