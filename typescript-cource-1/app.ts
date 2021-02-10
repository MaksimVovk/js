//type unknow
let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'

if (typeof userInput === 'string') {
  userName = userInput
}

// let userInput: unknown
// let userName: string
//userName = userInput //error because unknow != stirng

// let userInput: any
// let userName: string
//userName = userInput //not error because any is flexible