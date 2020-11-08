var button = document.querySelector('button');
var body = document.querySelector('body');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num1');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    var d = new Date();
    var datestring = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
    var num1 = +input1.value;
    var num2 = +input2.value;
    var elem = document.createElement('div');
    elem.style.cssText = 'display: grid; grid-template-columns: 50px 200px 100px; grid-gap: 10px;';
    elem.innerHTML = "<div>" + 1 + "</div><div>" + datestring + "</div><div>" + (num1 + num2) + "</div>";
    body.appendChild(elem);
});
