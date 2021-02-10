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

printResult(add(5, 12))