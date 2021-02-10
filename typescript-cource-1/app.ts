// function return types. Same like for var
function add (n1: number, n2: number): number {
  return n1 + n2
}

// type "void". Not necessary
function printResult (num: number): void {
  console.log(num)
}

// type "undefind".
function printResultU (num: number): undefined {
  console.log(num)
  return
}

function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

printResult(add(5, 12))
addAndHandle(24, 25, (result) => { console.log('RESULT CB', result) })

// type "Function"
// let combineValue: Function
let combineValue: (a: number, b: number) => number

combineValue = add
// combineValue = printResult
// combineValue = 5

console.log(combineValue(8, 8))