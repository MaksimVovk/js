"use strict";
function addNumbers(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (!showResult) {
        return result;
    }
    console.log(phrase, result);
    return;
}
const number1 = '1';
const number2 = 1.2;
const isPrintResult = true;
const phrase = 'Printing result inside function:';
const result = addNumbers(+number1, +number2, isPrintResult, phrase);
