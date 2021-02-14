"use strict";
// function return types. Same like for var
function add(n1, n2) {
    return n1 + n2;
}
// type "void". Not necessary
function printResult(num) {
    console.log(num);
}
// type "undefind".
function printResultU(num) {
    console.log(num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
addAndHandle(24, 25, (result) => { console.log('RESULT CB', result); });
// type "Function"
// let combineValue: Function
let combineValue;
combineValue = add;
// combineValue = printResult
// combineValue = 5
console.log(combineValue(8, 8));
