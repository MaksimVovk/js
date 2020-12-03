function add(n1: number, n2: number, showResult: boolean, phraze: string) {
  const result = n1 + n2

  if (showResult) {
    console.log(phraze + result)
  }

  return result
}

const num1 = 5
const num2 = 2.8
const printResult = true
const resultPhraze = 'Result is: '

add(num1, num2, printResult, resultPhraze)