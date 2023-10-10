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

// FUNCTION FOR CALCULATIONS
function calculationOperations(value) {
  if (!number1) {
    value = '';
  } else {
    if (operation) {
      if (number1 && operation && number2) {
        operate(operation, Number(number1), Number(number2));
        operation = value;
      } else if (number1 && !operation) {
        operation = value;
      } else if (number1 && operation && !number2) {
        awaitingNextValue = true;
        operation = value;
      }
    } else {
      operation = value;
      awaitingNextValue = true;
    }
  }
}

// SIMILAR TO THE ABOVE FUNCTION
// function calculationOperations(value) {
//   if (!number1) {
//     value = '';
//   } else {
//     awaitingNextValue = true;
//     if (operation) {
//       if (!number2) {
//         return;
//       }
//       operate(operation, Number(number1), Number(number2));
//     }
//     operation = value;
//   }
// }

// EVENT LISTENERS
// ADDITION BUTTON
addBtn.addEventListener('click', () => {
  calculationOperations(addBtn.value);
});

// SUBTRACTION BUTTON
subBtn.addEventListener('click', () => {
  calculationOperations(subBtn.value);
});

// MULITPLY BUTTON
multiplyBtn.addEventListener('click', () => {
  calculationOperations(multiplyBtn.value);
});

// DIVISION BUTTON
divideBtn.addEventListener('click', () => {
  calculationOperations(divideBtn.value);
});

// EQUALS BUTTON
equalsBtn.addEventListener('click', () => {
  awaitingNextValue = true;
  if (!number2) {
    awaitingNextValue = false;
    return;
  }
  operate(operation, Number(number1), Number(number2));
  number1 = display.textContent;
  number2 = '';
  operation = '';
});

// CLEARS ALL DATA
clearBtn.addEventListener('click', () => {
  awaitingNextValue = false;
  display.textContent = '';
  number1 = '';
  number2 = '';
  operation = '';
});

numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    displayScreen(button);
  });
});

function displayScreen(button) {
  function getFirst() {
    // WE CHECK FOR TRUTHINESS TO DETERMINE WHETHER TO SET number1 VALUE TO AN EMPTY STRING OR TO THE CURRENT VALUE IN THE DISPLAY
    if (awaitingNextValue) {
      number1 = '';
      awaitingNextValue = false;
    }
    number1 += button.value;
    display.textContent = number1;
  }
  function getSecond() {
    number2 += button.value;
    display.textContent = number2;
  }
  // BOTH AWAITINGVALUE AND OPERATION HAVE TO BE TRUE FOR THE SECOND VALUE FN TO BE CALLED
  if (awaitingNextValue && operation) {
    getSecond();
  } else {
    getFirst();
  }
  console.log(number1, number2);
}

function decimal() {
  // CHECK IF THE OPERATION IS TRUTHY: THIS MEANS THERE IS A FIRST VALUE STORED ALREADY ELSE: THE FIRST VALUE IS NONE EXISTENT THUS PERFORM THE SECOND CONDITION
  if (operation) {
    if (!number2.includes('.')) {
      number2 += decimalBtn.value;
    }
    if (number2 === '.') {
      number2 = '0.';
    }
    display.textContent = number2;
  } else {
    if (awaitingNextValue) {
      number1 = '';
      awaitingNextValue = false;
    }
    // IF FALSY ADD THE DECIMAL POINT ONLY ONCE
    if (!number1.includes('.')) {
      number1 += decimalBtn.value;
    }
    // FOR VALUES LESS THAN ONE TO DISPLAY "0"
    if (number1 === '.') {
      number1 = '0.';
    }
    display.textContent = number1;
  }
  console.log(number1, number2);
}

decimalBtn.addEventListener('click', decimal);
