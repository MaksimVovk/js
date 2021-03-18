"use strict";
//type unknow
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// let userInput: unknown
// let userName: string
//userName = userInput //error because unknow != stirng
// let userInput: any
// let userName: string
//userName = userInput //not error because any is flexible
// type "never" because never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
