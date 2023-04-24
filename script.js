'use strict'
// TODO: fix the issue with calculate above (10) numbers with any outher number
let answer = document.querySelector(".ans");
let clean = document.querySelector(".clean");
let answerValue = 0.0;
let isOperationDisabled = true;
let isNumberDisabled = false;
let currentOperation = "";

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
let disableNumbers = function () {
    let numbers = document.getElementsByClassName("number");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.add("disabledBtn");
    }
    isNumberDisabled = true;
}
let enableNumbers = function () {
    let numbers = document.getElementsByClassName("number");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove("disabledBtn");
    }
    isNumberDisabled = false;
}
let init = function () {
    answer.innerHTML = "";
    answerValue = 0.0;
    isOperationDisabled = true;
    isNumberDisabled = false;
    currentOperation = "";
    disableOperations();
    enableNumbers();
}
document.body.addEventListener("onload", init());
// init();



clean.addEventListener("click", init);

let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        answer.innerHTML += numbers[i].innerHTML;
        if (currentOperation === "+") {
            answerValue += parseFloat(numbers[i].innerHTML);
            currentOperation = "";
        } else if (currentOperation === "-") {
            answerValue -= parseFloat(numbers[i].innerHTML);
            currentOperation = "";
        } else if (currentOperation === "*") {
            answerValue *= parseFloat(numbers[i].innerHTML);
            currentOperation = "";
        } else if (currentOperation === "/") {
            answerValue /= parseFloat(numbers[i].innerHTML);
            currentOperation = "";
        } else {
            answerValue = parseFloat(numbers[i].innerHTML);
        }
        if (isOperationDisabled) {
            enableOperations();
        }
    });
}

// ? this is good ? or can we do better performance ? think on it later

let operations = document.getElementsByClassName("operation");
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function () {
        let operation = operations[i].innerHTML;
        switch (operation) {
            case "+":
                answer.innerHTML += " " + operation + " ";
                currentOperation = "+";
                disableOperations();
                enableNumbers();
                break;
            case "-":
                answer.innerHTML += " " + operation + " ";
                currentOperation = "-";
                disableOperations();
                enableNumbers();
                break;
            case "*":
                answer.innerHTML += " " + operation + " ";
                currentOperation = "*";
                disableOperations();
                enableNumbers();
                break;
            case "/":
                answer.innerHTML += " " + operation + " ";
                currentOperation = "/";
                disableOperations();
                enableNumbers();
                break;
            case "=":
                answer.innerHTML = answerValue;
                disableNumbers();
                break;
        }
    });
}

document.body.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key === "Backspace") {
        answer.innerHTML = answer.innerHTML.slice(0, -1);
    } else if (key === "Enter") {
        answer.innerHTML = answerValue;
        disableNumbers();
    } else if (key === "Escape") {
        init();
    }
    else if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" && !isNumberDisabled) {
        answer.innerHTML += key;
        if (currentOperation === "+") {
            answerValue += parseFloat(key);
            currentOperation = "";

        } else if (currentOperation === "-") {
            answerValue -= parseFloat(key);
            currentOperation = "";
        } else if (currentOperation === "*") {
            answerValue *= parseFloat(key);
            currentOperation = "";
        } else if (currentOperation === "/") {
            answerValue /= parseFloat(key);
            currentOperation = "";
        } else {
            answerValue = parseFloat(key);
        }

        if (isOperationDisabled) {
            enableOperations();
        }
    } else if (key === "+" && !isOperationDisabled) {
        answer.innerHTML += " " + key + " ";
        currentOperation = "+";
        disableOperations();
        enableNumbers();
    } else if (key === "-" && !isOperationDisabled) {
        answer.innerHTML += " " + key + " ";
        currentOperation = "-";
        disableOperations();
        enableNumbers();
    } else if (key === "*" && !isOperationDisabled) {
        answer.innerHTML += " " + key + " ";
        currentOperation = "*";
        disableOperations();
        enableNumbers();
    } else if (key === "/" && !isOperationDisabled) {
        answer.innerHTML += " " + key + " ";
        currentOperation = "/";
        disableOperations();
        enableNumbers();
    }
});







