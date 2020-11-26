function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('printResult: ', num);
}
printResult(add(5, 12));
// let conbineValue: Function
var conbineValue;
conbineValue = add;
// conbineValue = printResult
console.log('conbineValue ', conbineValue(8, 8));
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// addHandler(10, 20, printResult)
addAndHandler(10, 20, function (result) {
    console.log('addAndHandler ', result);
});
