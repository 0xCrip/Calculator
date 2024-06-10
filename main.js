function addNum(num1, num2) {
    let output = num1 + num2
    console.log(output)
}

function subtractNum(num1, num2) {
    let output = num1 - num2
    console.log(output)
}

function multiplyNum(num1, num2) {
    let output = num1 * num2
    console.log(output)
}

function divideNum(num1, num2) {
    let output = num1 / num2
    console.log(output)
}

function operate(operator, num1, num2) {
    console.log(operator)

    if (operator == "+") {
        addNum(num1, num2);
    } else if (operator == "-") {
        subtractNum(num1, num2);
    }else if (operator == "*") {
        multiplyNum(num1, num2);
    } else {
        divideNum(num1, num2)
    };
}

// operate(oper, num1, num2)
let inputCount = 0
let oper
let num1
let num2

console.log(num1)

function numCheck() {
    if (inputCount == 3) {
        operate(oper, num1, num2);
    } else {
        return
    }
}

const btnPlus = document.querySelector("#plus");
// btnPlus.addEventListener('click', () => {

// })