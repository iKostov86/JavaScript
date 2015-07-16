var console = console;
//Problem 1. Exchange if greater
function exchangeIfGreater(a, b) {
    "use strict";
    if (a > b) {
        console.log(b + ' ' + a);
    } else {
        console.log(a + ' ' + b);
    }
}

//Problem 2. Multiplication Sign
function multiplicationSign(a, b, c) {
    'use strict';
    var countNegative = 0;
    if (a === 0 || b === 0 || c === 0) {
        return 0;
    } else {
        if (a < 0) {
            countNegative++;
        }
        if (b < 0) {
            countNegative++;
        }
        if (c < 0) {
            countNegative++;
        }
        if (countNegative % 2 === 0) {
            return '+';
        } else {
            return '-';
        }
    }
}

//Problem 3. The biggest of Three
function theBiggestOfThree(a, b, c) {
    'use strict';
    if (a >= b) {
        if (a >= c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        if (b >= c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}

//Problem 4. Sort 3 numbers
function sortThreeNumbers(a, b, c) {
    'use strict';
    if (a > b) {
        if (a < c) {
            console.log(c + ' ' + a + ' ' + b);
        } else if(b < c){
            console.log(a + ' ' + c + ' ' + b);
        } else {
            console.log(a + ' ' + b + ' ' + c);
        }
    } else {
        if (b < c) {
            console.log(c + ' ' + b + ' ' + a);
        } else if(a < c) {
            console.log(b + ' ' + c + ' ' + a);
        } else {
            console.log(b + ' ' + a + ' ' + c);
        }
    }
}

//Problem 5. Digit as word
function digitAsWord() {
    'use strict';
    var input = window.prompt('Enter a digit [0-9]');
    switch (+input) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('Is not a digit!');
    }
}

//Problem 6. Quadratic equation
function quadraticEquation(a, b, c) {
    'use strict';
    var d,
        x1,
        x2;

    d = b * b - 4 * a * c;
    if (d < 0) {
        return 'no real roots';
    }

    x1 = (-b - Math.sqrt(d)) / (2 * a);
    x2 = (-b + Math.sqrt(d)) / (2 * a);
    if (x1 !== x2) {
        return 'x1=' + x1 + '; ' + 'x2=' + x2;
    } else {
        return 'x1=x2=' + x1;
    }
}

//Problem 7. The biggest of five numbers
function theBiggestOfFiveNumbers(a, b, c, d, e) {
    'use strict';
    var biggest = a;

    if (b > biggest) {
        biggest = b;
    }
    if (c > biggest) {
        biggest = c;
    }
    if (d > biggest) {
        biggest = d;
    }
    if (e > biggest) {
        biggest = e;
    }
    return biggest;
}

//Problem 8. Number as words
function numberAsWords(number) {
    'use strict';
    var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tenths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundreds = 'hundred',
        firstDigit,
        secondDigit,
        thirdDigit,
        result = '';

    firstDigit = number % 10 | 0;
    secondDigit = number % 100 / 10 | 0;
    thirdDigit = number / 100 | 0;

    if (thirdDigit) {
        result += units[thirdDigit] + ' ' + hundreds;
        if (secondDigit || firstDigit) {
            result += ' and ';
        } else {
            return result[0].toUpperCase() + result.slice(1);
        }
    } else if (!secondDigit && !firstDigit) {
        result += units[0];
        return result[0].toUpperCase() + result.slice(1);
    }

    if (secondDigit === 1) {
        result += units[+(secondDigit + '' + firstDigit)];
    } else if (!secondDigit) {
        result += units[firstDigit];
    } else {
        result += tenths[secondDigit - 2];
        if (firstDigit) {
            result += ' ' + units[firstDigit];
        }
    }

    return result[0].toUpperCase() + result.slice(1);
}