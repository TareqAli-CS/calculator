'use strict'

let answer = document.querySelector(".ans");
let clean = document.querySelector(".clean");
let answerValue = 0.0;
let isOperationDisabled = true;

let disableOperations = function () {
    let operations = document.getElementsByClassName("operation");
    for (let i = 0; i < operations.length; i++) {
        operations[i].classList.add("disabledBtn")
    }
    isOperationDisabled = true;
}
let enableOperations = function () {
    let operations = document.getElementsByClassName("operation");
    for (let i = 0; i < operations.length; i++) {
        operations[i].classList.remove("disabledBtn");
    }
    isOperationDisabled = false;
}
let init = function () {
    answer.innerHTML = "";
    answerValue = 0.0;
    disableOperations();



}
init();



clean.addEventListener("click", init);

let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        answer.innerHTML += numbers[i].innerHTML;
        answerValue = parseFloat(numbers[i].innerHTML);
        if (isOperationDisabled) {
            enableOperations();
        }
    });
}
let operations = document.getElementsByClassName("operation");
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function () {
        let operation = operations[i].innerHTML;
        switch (operation) {
            case "+":
                answerValue += parseFloat(answer.innerHTML);
                answer.innerHTML += " " + operation + " ";
                disableOperations();
                break;
            case "-":
                answerValue -= parseFloat(answer.innerHTML);
                answer.innerHTML += " " + operation + " ";
                disableOperations();
                break;
            case "*":
                answerValue *= parseFloat(answer.innerHTML);
                answer.innerHTML += " " + operation + " ";
                disableOperations();
                break;
            case "/":
                answerValue /= parseFloat(answer.innerHTML);
                answer.innerHTML += " " + operation + " ";
                disableOperations();
                break;
            case "=":
                answer.innerHTML = answerValue;
                disableOperations();
                break;
        }
    });
}





