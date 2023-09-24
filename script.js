// GETTING THE OPERATION BUTTONS
const addBtn = document.getElementById('addition');
const subBtn = document.getElementById('subtraction');
const divideBtn = document.getElementById('multiplication');
const multiplyBtn = document.getElementById('division');

const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

const display = document.querySelector('h1');

// GET ALL NUMBER BUTTONS
const numberBtns = document.querySelectorAll('.number');
const decimalBtn = document.querySelector('.decimal');

// CALCULATION FUNCTIONS
let operation = '';
let number1 = '';
let number2 = '';
let awaitingNextValue = false;

function add(num1, num2) {
  let ans = num1 + num2;
  return ans;
}

function subtract(num1, num2) {
  let ans = num1 - num2;
  return ans;
}

function multiply(num1, num2) {
  let ans = num1 * num2;
  return ans;
}

function divide(num1, num2) {
  let ans = num1 / num2;
  return ans;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case 'add':
      number1 = add(num1, num2);
      display.textContent = number1;
      number2 = '';
      break;
    case 'sub':
      number1 = subtract(num1, num2);
      display.textContent = number1;
      number2 = '';
      break;
    case 'multiply':
      number1 = multiply(num1, num2);
      display.textContent = number1;
      number2 = '';
      break;
    case 'divide':
      number1 = divide(num1, num2);
      display.textContent = number1;
      number2 = '';
      break;
    default:
      break;
  }
}

// EVENT LISTENERS
addBtn.addEventListener('click', () => {
  awaitingNextValue = true;
  if (operation) {
    if (!number2) {
      return;
    }
    operate(operation, Number(number1), Number(number2));
  }
  operation = addBtn.value;
});

subBtn.addEventListener('click', () => {
  awaitingNextValue = true;
  if (operation) {
    if (!number2) {
      return;
    }
    operate(operation, Number(number1), Number(number2));
  }
  operation = subBtn.value;
  console.log(operation);
});

multiplyBtn.addEventListener('click', () => {
  awaitingNextValue = true;
  if (operation) {
    if (!number2) {
      return;
    }
    operate(operation, Number(number1), Number(number2));
  }
  operation = multiplyBtn.value;
  console.log(operation);
});

divideBtn.addEventListener('click', () => {
  awaitingNextValue = true;
  if (operation) {
    if (!number2) {
      return;
    }
    operate(operation, Number(number1), Number(number2));
  }
  operation = divideBtn.value;
  console.log(operation);
});

equalsBtn.addEventListener('click', () => {
  awaitingNextValue = true;
  if (!number2) {
    awaitingNextValue = false;
    return;
  }
  operate(operation, Number(number1), Number(number2));
  awaitingNextValue = false;
  number1 = '';
  number2 = '';
  operation = '';
});

clearBtn.addEventListener('click', () => {
  awaitingNextValue = false;
  display.textContent = '';
  number1 = '';
  number2 = '';
});

numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    displayScreen(button);
  });
});

function displayScreen(button) {
  function getFirst() {
    number1 += button.value;
    display.textContent = number1;
  }

  function getSecond() {
    number2 += button.value;
    display.textContent = number2;
  }

  if (awaitingNextValue) {
    getSecond();
  } else {
    getFirst();
  }
  console.log(number1, number2);
}

function decimal() {
  number1 = String(number1);
  number2 = String(number2);
  if (!number1.includes('.')) {
    number1 += decimalBtn.value;
    display.textContent = number1;
  } else if (!number2.includes('.')) {
    number2 += decimalBtn.value;
    display.textContent = number2;
  } else {
    decimalBtn.value = '';
  }

  decimal.value = '.';
  console.log(decimalBtn.value);
}

decimalBtn.addEventListener('click', decimal);
