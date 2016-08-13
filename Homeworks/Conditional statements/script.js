var console = console;
// Problem 1. Exchange if greater
function exchangeIfFirstNumberIsGreater(args) {
    "use strict";
    var a = +args[0];
    var b = +args[1];
    var result = '';

    result += a > b ? b  + ' ' + a : a  + ' ' + b;
    console.log(result);
}

// Problem 2. Multiplication Sign
function multiplicationSign(args) {
    'use strict';
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var countNegative = 0;

    if (a === 0 || b === 0 || c === 0) {
        return 0;
    } 
    else {
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

// Problem 3. The biggest of Three
function theBiggestOfThree(args) {
    'use strict';
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var theBiggest = a;

    if (a >= b) {
        if (a < c) {
            theBiggest = c;
        }
    } else {
        if (b >= c) {
            theBiggest = b;
        } else {
            theBiggest = c;
        }
    }

    console.log(theBiggest);
}

// Problem 4. Sort 3 numbers
function sortThreeNums(args) {
    'use strict';
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var result = '';

    if (a >= b) {
        if (a < c) {
            result += c + ' ' + a + ' ' + b;
        } else if(b < c){
            result += a + ' ' + c + ' ' + b;
        } else {
            result += a + ' ' + b + ' ' + c;
        }
    } else {
        if (b < c) {
            result += c + ' ' + b + ' ' + a;
        } else if(a < c) {
            result += b + ' ' + c + ' ' + a;
        } else {
            result += b + ' ' + a + ' ' + c;
        }
    }

    console.log(result);
}

// Problem 5. Digit as word
function digitAsWord(args) {
    'use strict';
    // var input = window.prompt('Enter a digit [0-9]');
    var num = +args[0];
    var digit = '';

    switch (num) {
        case 0:
            digit += 'zero';
            break;
        case 1:
            digit += 'one';
            break;
        case 2:
            digit += 'two';
            break;
        case 3:
            digit += 'three';
            break;
        case 4:
            digit += 'four';
            break;
        case 5:
            digit += 'five';
            break;
        case 6:
            digit += 'six';
            break;
        case 7:
            digit += 'seven';
            break;
        case 8:
            digit += 'eight';
            break;
        case 9:
            digit += 'nine';
            break;
        default:
            digit += 'not a digit';
    }

    console.log(digit);
}

// Problem 6. Quadratic equation
function quadraticEquation(args) {
    'use strict';
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        result = '',
        d,
        x1,
        x2;

    d = b * b - 4 * a * c;

    if (d < 0) {
        result += 'no real roots';
    } else {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);

        if (x1 !== x2) {
            result += 'x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2);
        } else {
            result += 'x1=x2=' + x1.toFixed(2);
        }
    }

    console.log(result);
}

// Problem 7. The biggest of five numbers
function theBiggestOfFiveNums(args) {
    'use strict';
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = + args[4],
        theBiggest;

    theBiggest = a;

    if (b > theBiggest) {
        theBiggest = b;
    }
    if (c > theBiggest) {
        theBiggest = c;
    }
    if (d > theBiggest) {
        theBiggest = d;
    }
    if (e > theBiggest) {
        theBiggest = e;
    }
    return theBiggest;
}

// Problem 8. Number as words
function numberAsWords(args) {
    'use strict';
    var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tenths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundreds = 'hundred',
        num = +args[0],
        firstDigit,
        secondDigit,
        thirdDigit,
        result = '';

    firstDigit = num % 10 | 0;
    secondDigit = num % 100 / 10 | 0;
    thirdDigit = num / 100 | 0;

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

numberAsWords(['27']);