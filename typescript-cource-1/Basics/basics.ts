function addNumber (n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2

  if (!showResult) {
    return result
  }

  console.log(phrase, result)
}

const number1 = '1'
const number2: number = 1.2
const isPrintResult = true
const phrase = 'Printing result inside function:'

const result = addNumber(+number1, +number2, isPrintResult, phrase)
