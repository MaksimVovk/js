var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
function handler() {
    var n1 = input1.value;
    var n2 = input2.value;
    console.log(add(+n1, +n2));
}
button.addEventListener('click', handler);
