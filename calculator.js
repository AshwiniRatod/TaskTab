const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const addIn = document.getElementById('add');
const subIn = document.getElementById('sub');
const divIn = document.getElementById('div');
const multiIn = document.getElementById('multi');
const resultDisplay = document.getElementById('result');

function calculate(operation) {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultDisplay.textContent = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
            break;
        case 'multi':
            result = n1 * n2;
            break;
        case 'div':
            if (n2 === 0) {
                resultDisplay.textContent = 'Cannot divide by zero';
                return;
            }
            result = n1 / n2;
            break;
    }

    resultDisplay.textContent = `The result is: ${result}`;
}

addIn.addEventListener('click', () => calculate('add'));
subIn.addEventListener('click', () => calculate('sub'));
multiIn.addEventListener('click', () => calculate('multi'));
divIn.addEventListener('click', () => calculate('div'));
