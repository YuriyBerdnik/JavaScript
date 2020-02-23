// Create simple calculator app (add, multiply, divide, substract)

let xStr = prompt('Введите первое число:', '');
let x = Number(xStr);
let yStr = prompt('Введите второе число:', '');
let y = Number(yStr);
let act = prompt('Что будем делать? \nВведите + * / -', '');

function add(x, y) {
    alert('Результат сложения: ' + (x + y));
}

function multiply(x, y) {
    alert('Результат умножения: ' + (x * y));
}

function divide(x, y) {
    alert('Результат деления: ' + (x / y));
}

function substract(x, y) {
    alert('Результат вычитания: ' + (x - y));
}

switch (act) {
    case '+':
        add(x, y);
        break;

    case '*':
        multiply(x, y);
        break;

    case '/':
        divide(x, y);
        break;

    case '-':
        substract(x, y);
        break;
}