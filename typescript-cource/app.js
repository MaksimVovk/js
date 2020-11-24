function combine(input1, input2) {
    var result;
    if (input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
var combineNames = combine('Test', ' Tester');
console.log(combineAges);
console.log(combineNames);
