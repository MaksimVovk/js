"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result
    // } else {
    //   return result.toString()
    // }
}
const combinedAges = combine(26, 25, 'as-number');
console.log(combinedAges);
const combinedNames = combine('Max', 'Lena', 'as-text');
console.log(combinedNames);
const combinedStringAges = combine('26', '25', 'as-number');
console.log(combinedStringAges);
