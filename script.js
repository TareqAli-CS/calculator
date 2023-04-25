'use strict'

// ! This calculator don't care about the order of operations ( * , / )
// ! It just calculate the operations from left to right
// TODO: Add the order of operations
// TODO: Add the ability to calculate the percentage and dot button 


let answer = document.querySelector(".ans");
let clean = document.querySelector(".clean");
let answerValue = 0.0;
let isOperationDisabled = true;
let isNumberDisabled = false;
let currentOperation = "";
let numberToMultiply = 1;
// an array containing the numbers that the user entered
let nums = new Array();
// an array containing the operations that the user entered
let ops = new Array();

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
    numberToMultiply = 1
    nums = new Array();
    ops = new Array();
    disableOperations();
    enableNumbers();
}
document.body.addEventListener("onload", init());
// init();
let calculate = function () {
    let result = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            nums[i + 1] = nums[i] + nums[i + 1];
        } else if (ops[i] === "-") {
            nums[i + 1] = nums[i] - nums[i + 1];
        } else if (ops[i] === "*") {
            nums[i + 1] = nums[i] * nums[i + 1];
        } else if (ops[i] === "/") {
            if (nums[i + 1] === 0) {
                alert("You can't divide by zero");
                init();
                return;
            }
            nums[i + 1] = nums[i] / nums[i + 1];
        }
    }
    result = nums[nums.length - 1];
    nums = new Array();
    ops = new Array();
    nums.push(result);
    answerValue = result;
    answer.innerHTML = answerValue;
    disableNumbers();
}

clean.addEventListener("click", init);

let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let currentNumber = numbers[i].innerHTML;
        answer.innerHTML += currentNumber;
        if (currentOperation === "" && nums.length > 0) {
            nums[nums.length - 1] = nums[nums.length - 1] * 10 + parseFloat(currentNumber);
            numberToMultiply = 10;
        } else {
            nums.push(parseFloat(currentNumber));
            currentOperation = "";
            numberToMultiply = 1;
        }
        if (isOperationDisabled) {
            enableOperations();
        }
    });
}

let operations = document.getElementsByClassName("operation");
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function () {
        for (let i = 0; i < nums.length; i++) {
            console.log(nums[i]);
        }
        let operation = operations[i].innerHTML;
        if (operation === "=") {
            calculate();
        } else {
            if (nums.length === 0) {
                nums.push(0);
            }
            answer.innerHTML += " " + operation + " ";
            ops.push(operation);
            disableOperations();
            enableNumbers();
        }
        currentOperation = operation;
    });
}

document.body.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key === "Enter") {
        calculate();
    } else if (key === "Escape") {
        init();
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        if (nums.length === 0) {
            nums.push(0);
        }
        if (isOperationDisabled) {
            return;
        }
        answer.innerHTML += " " + key + " ";
        ops.push(key);
        disableOperations();
        enableNumbers();
        currentOperation = key;
    }
    else if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9") {
        let currentNumber = key;
        if (isNumberDisabled) {
            return;
        }
        answer.innerHTML += currentNumber;
        if (currentOperation === "" && nums.length > 0) {
            nums[nums.length - 1] = nums[nums.length - 1] * 10 + parseFloat(currentNumber);
            numberToMultiply = 10;
        } else {
            nums.push(parseFloat(currentNumber));
            currentOperation = "";
            numberToMultiply = 1;
        }
        if (isOperationDisabled) {
            enableOperations();
        }
    }
});







