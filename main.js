let inputCount = 0
let oper = null
let num1 = ""
let num2 = 0

function operate(operator, x, y) {
    if (operator === "+") {
        return x + y
    } else if (operator === "-") {
        return x - y
    }else if (operator === "×") {
        return x * y
    } else {
        return x / y
    }
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
        if (oper === null) {
            num1 = num1 + button.textContent
        } else {
            num1 = Number(num1)
            num2 = Number(button.textContent)
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
    oper = null
    num1 = ""
    num2 = 0
    outputBox.textContent = ""
})

btnRes.addEventListener('click', () => {
    const result = operate(oper, parseInt(num1), parseInt(num2))
    outputBox.textContent = outputBox.textContent + " = " + result
})