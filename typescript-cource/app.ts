function add (n1: number, n2: number): number {
  return n1 + n2
}

function printResult (num: Number): void {
  console.log('Result: ', num)
}

printResult(add(5, 12))

// let conbineValue: Function
let conbineValue: (a: number, b: number) => number

conbineValue = add
// conbineValue = printResult

console.log(conbineValue(8,8))