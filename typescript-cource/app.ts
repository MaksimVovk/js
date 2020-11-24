function combine(input1: number | string, input2: number | string) {
  let result

  if (input1 === 'number' && input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

const combineAges = combine(30, 26)
const combineNames = combine('Test', ' Tester')

console.log(combineAges)
console.log(combineNames)