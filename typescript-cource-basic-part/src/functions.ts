function add (n1: number, n2: number): number {
  return n1 + n2
}

function printResult (num: Number): void {
  console.log('printResult: ', num)
}

printResult(add(5, 12))

// let conbineValue: Function
let conbineValue: (a: number, b: number) => number

conbineValue = add
// conbineValue = printResult

console.log('conbineValue ', conbineValue(8,8))


function addAndHandler (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2

  cb(result)
}

// addHandler(10, 20, printResult)
addAndHandler(10, 20, result => {
  console.log('addAndHandler ', result)
})