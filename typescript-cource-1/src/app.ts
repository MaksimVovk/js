class Department {
  name: string

  constructor (n: string) {
    this.name = n
  }

  log (this: Department) {
    console.log('Department: ' + this.name)
  }
}

const accounting = new Department('Accounting')

accounting.log()

const accountingCopy = { name: 'Copy of Accounting', log: accounting.log }

accountingCopy.log()