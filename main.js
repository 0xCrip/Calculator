function addNum(num1, num2) {
    let res = num1 + num2
    outputBox.textContent = outputBox.textContent + " = " + res
}

function subtractNum(num1, num2) {
    let res = num1 - num2
    outputBox.textContent = outputBox.textContent + " = " + res
}

function multiplyNum(num1, num2) {
    let res = num1 * num2
    outputBox.textContent = outputBox.textContent + " = " + res
}

function divideNum(num1, num2) {
    let res = num1 / num2
    outputBox.textContent = outputBox.textContent + " = " + res
}

let inputCount = 0
let oper
let num1 = 0 
let num2 = 0

function operate(operator, num1, num2) {
    if (operator == "+") {
        addNum(num1, num2);
    } else if (operator == "-") {
        subtractNum(num1, num2);
    }else if (operator == "x") {
        operator = "*";
        multiplyNum(num1, num2);
    } else {
        divideNum(num1, num2)
    };
}

// This contains all the events for the buttons
const outputBox = document.querySelector('#output');
const numberButtons = document.querySelectorAll('#numbers button');
const operButtons = document.querySelectorAll('#plus, #minus, #multiply, #divide');
const btnClear = document.querySelector('#clear');
const btnRes = document.querySelector('#result');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputCount++
        output.textContent = outputBox.textContent + button.textContent
        if (inputCount == 1) {
            num1 = parseInt(button.textContent)
        } else {
            num2 = parseInt(button.textContent)
        }
    })
})

operButtons.forEach(button => {
    button.addEventListener('click', () => {
        oper = button.textContent;
        outputBox.textContent = outputBox.textContent + button.textContent;
    })
})

btnClear.addEventListener('click', () => {
    inputCount = 0
    oper = undefined
    num1 = undefined
    num2 = undefined
    outputBox.textContent = ""
    console.log("Calculator Cleared")
})

btnRes.addEventListener('click', () => {
    console.log(oper + " " + num1 + " " + num2)

    
    operate(oper, num1, num2)
})