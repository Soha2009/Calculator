function addNumber(number) {
    document.getElementById("display").value += number;
}
function addOperator(op) {
    document.getElementById("display").value += op;
}
function calculate() {
    let answer = eval(document.getElementById("display").value);
    document.getElementById("display").value = answer;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
