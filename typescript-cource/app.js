function add(n1, n2, showResult, phraze) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phraze + result);
    }
    return result;
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPhraze = 'Result is: ';
add(num1, num2, printResult, resultPhraze);
