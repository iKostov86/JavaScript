// Problem 1. Numbers
function printsNumbers(args) {
    'use strict';
    var num = +args[0];
    var result = '';

    for(var i = 1; i < num; i += 1 ) {
        result += i + ' ';
    }

    result += i;

    console.log(result);
}

// Problem 2.1 Numbers that are not divisible
function printsNumberThatAreNotDivisibleBy3And7(n) {
    'use strict';
    for (var i = 1; i <= n; i += 1) {
        if (i % 3 && i % 7) {
            console.log(i);
        }
    }
}

// Problem 2.2 Min/Max/Sum/Average of sequence
function MMSA() {
    'use strict';
    var args = Array.prototype.slice.apply(arguments[0]),
        max,
        min,
        sum,
        avg,
        len,
        i;

    max = +args[0];
    min = +args[0];
    sum = +args[0];
    len = args.length;

    for (i = 1; i < len; i += 1) {
        var arg = +args[i];

        if (max < arg) {
            max = arg;
        }
        if (min > arg) {
            min = arg;
        }

        sum += arg;
    }

    avg = sum / len;

    // console.log('min=1.00 max=5.00 sum=8.00 avg=2.67');
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}

// MMSA(['2', '5', '1']);

// Problem 3. Matrix of numbers
function matrixOfNumbers(args) {
    var num = +args[0];

    // for (var i = 1; i <= num; i += 1) {
    //     var line = '';

    //     for (var j = i; j < num + i - 1; j += 1) {
    //         line += j + ' ';
    //     }

    //     line += j;
    //     console.log(line);
    // }

    if (num === 0) {
        console.log(num);
    }
    else {
        var line = '';
        var count = 0;
        for (var i = count + 1; i <= num + count; i += 1) {    
            if (i >= num * 2) {
                break;
            } else if (i === num + count) {
                line += i;
                i = ++count;
                console.log(line);
                line = '';            
            } else {
                line += i + ' ';
            }
        }
    }
}

// for (var i = 0; i < 5; i += 1) {
//     matrixOfNumbers([i + '']);
//     console.log();
// }

// Problem 4. Lexicographically smallest
function lexicographicallyTheSmallest(element) {
    'use strict';
    var theLargest = 'A',
        theSmallest = 'z',
        prop;

    for (prop in element) {
        for (var i = 0, len = Math.min(theLargest.length, prop.length); i < len; i += 1) {
            if (theLargest[i] === prop[i]) {
                continue;
            }
            else if (theLargest[i] < prop[i]) {
                theLargest = prop;
            }
            else {
                break;
            }
        }
        for (var i = 0, len = Math.min(theSmallest.length, prop.length); i < len; i += 1) {
            if (theSmallest[i] === prop[i]) {
                continue;
            }
            else if (theSmallest[i] > prop[i]) {
                theSmallest = prop;
            }
            else {
                break;
            }
        }
    }

    console.log('The largest is: ' + theLargest);
    console.log('The smallest is: ' + theSmallest);
}

// Problem 5.1 Hex to Decimal
function hexToDecimal(args) {
    var hex = args[0];
    var decimal = parseInt(hex, 16);

    console.log(decimal);
}

// Problem 5.2 Decimal to Hex
function DecimalToHex(args) {
    var decimal = +args[0];
    var hex = decimal.toString(16);

    console.log(hex);
}