type Combinable = number | string
type CombinableDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CombinableDescriptor
) {
  let result

  if (input1 === 'number' && input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }

  // if (resultConversion === 'as-number') {
  //   return +result
  // } else {
  //   return result.toString()
  // }
  return result
}

const combineAges = combine(30, 26, 'as-number')
console.log(combineAges)

const combineNames = combine('Test', ' Tester', 'as-text')
console.log(combineNames)

const combineStringAges = combine('30', '26', 'as-number')
console.log(combineStringAges)