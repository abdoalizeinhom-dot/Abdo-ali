// Get the display element
const display = document.getElementById('display');

// Append number to display
function appendNumber(num) {
    if (num === '.' && display.value.includes('.')) {
        return; // Prevent multiple decimal points
    }
    display.value += num;
}

// Append operator to display
function appendOperator(operator) {
    if (display.value === '') {
        return; // Prevent operator at the beginning
    }
    
    // Prevent consecutive operators
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        return;
    }
    
    display.value += operator;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        // Get the expression from the display
        let expression = display.value;
        
        if (expression === '') {
            return;
        }
        
        // Evaluate the expression
        const result = Function('"use strict"; return (' + expression + ')')();
        
        // Display the result
        display.value = parseFloat(result.toFixed(10)); // Limit decimal places
    } catch (error) {
        display.value = 'Error';
        console.error('Calculation error:', error);
        
        // Clear error message after 2 seconds
        setTimeout(() => {
            display.value = '';
        }, 2000);
    }
}

// Allow keyboard input
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        event.preventDefault();
        appendOperator(event.key);
    } else if (event.key === '.') {
        appendNumber('.');
    } else if (event.key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLastChar();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
