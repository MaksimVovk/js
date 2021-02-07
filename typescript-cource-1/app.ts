function add (n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2

  if (!showResult) {
    return result
  }

  console.log(phrase, result)
}

const number1 = '1'
const number2 = 1.2
const printResult = true
const phrase = 'Printing result inside function:'

const result = add(+number1, +number2, printResult, phrase)
