function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ', num);
}
printResult(add(5, 12));
// let conbineValue: Function
var conbineValue;
conbineValue = add;
// conbineValue = printResult
console.log(conbineValue(8, 8));
