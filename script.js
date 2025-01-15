const display = document.getElementById('result');

function append(value) {
    display.value += value;
}

function clearResult() {
    display.value = '';
}

function clearEntry() {
    let lastOperatorIndex = -1;
    for (let i = display.value.length - 1; i >= 0; i--) {
        if (['+', '-', '*', '/'].includes(display.value[i])) {
            lastOperatorIndex = i;
            break;
        }
    }
    if (lastOperatorIndex === -1) {
        display.value = '';
    } else {
        display.value = display.value.substring(0, lastOperatorIndex + 1);
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace("^", "**"));
    } catch (error) {
        display.value = "Error";
    }
}

function changeSign() {
    try {
        display.value = eval(display.value) * -1;
    } catch (error) {
        display.value = "Error";
    }
}

function calculateInverse() {
    try {
        display.value = 1 / eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePercentage() {
    try {
        const currentValue = parseFloat(display.value);
        if (isNaN(currentValue)) {
            display.value = "Error";
            return;
        }

        const lastChar = display.value.slice(-1);

        if (['+', '-', '*', '/'].includes(lastChar)) {
            let parts = display.value.split(/[-+*/]/);
            let num = parseFloat(parts[parts.length -2]);
            let percent = parseFloat(parts[parts.length-1]);
            if(isNaN(num) || isNaN(percent)){
                display.value="Error";
                return;
            }
            let result = num * (percent / 100);
            display.value = display.value.slice(0,-parts[parts.length-1].length) + result;
        } else {
            display.value = currentValue / 100;
        }
    } catch (error) {
        display.value = "Error";
    }
}
