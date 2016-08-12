// Problem 1
function oddOrEven(args) {
    'use strict'
    var x = +args[0];
    var parsedToIntX = x | 0;

    if (x === parsedToIntX && x <= 30 && x >= -30) {
        if (x % 2 === 0) {
            console.log('even ' + x);
        }
        else {
            console.log('odd ' + x);
        }
    }
}
// oddOrEven(['7']);

// Problem 2
function divisibleBy7and5(args) {
    'use strict'
    var x = +args[0];

    if (x % 7 === 0 && x % 5 === 0) {
        console.log('true ' + x);
    }
    else {
        console.log('false ' + x);
    }
}

// Problem 3
function rectangleArea(args) {
    'use strict'
    var width = + args[0];
    var height = +args[1];
    var area = (width * height).toFixed(2);
    var perimeter = (2 * width + 2 * height).toFixed(2);

    return area + ' ' + perimeter;
}

// Problem 4
function thirdGivenIs7(args) {
    "use strict";
    var x = +args[0];
    var result = ((x / 100) | 0) % 10;

    return result === 7 ? 'true' : 'false ' + result;
}

// Problem 5
function getThirdBit(args) {
    "use strict"
    var x = +args[0];

    return x & 8 ? 1 : 0;
}

// Problem 6
function pointInCircle(args) {
    'use strict'
    var x = +args[0];
    var y = +args[1];
    var r = +args[2] || 2;

    if (x >= -1000 && x <= 1000) {
        var distance = Math.sqrt(x * x + y * y).toFixed(2);

        return distance <= r ? 'yes ' + distance : 'no ' + distance;
    }
}

// Problem 7
function isPrime(args) {
    'use strict'
    var x = +args[0];

    if (x >= 0 && x <= 100) {

    }
    var boundary = Math.floor(Math.sqrt(x));

    if (x <= 1) { return false; }
    if (x === 2) { return true; }

    for (var i = 2; i <= boundary; i += 1) {
        if (x % i === 0) return false;
    }

    return true;
}

// Problem 8
function trapezoidArea(args) {
    'use strict'
    var a = +args[0];
    var b = +args[1];
    var h = +args[2];
    var area = ((a + b) / 2) * h;
    
    return area.toFixed(7);
}

// Problem 9
function pointInCircleAndOutsideRectangle(args) {
    function pointInCircle(args) {
        'use strict'
        var a = +args[0];
        var b = +args[1];
        var r = +args[2] || 2;

        if (a >= -1000 && a <= 1000) {
            var distance = Math.sqrt(a * a + b * b).toFixed(2);

            return distance <= r ? true : false;
        }
    }

    'use strict'
    var x = +args[0];
    var y = +args[1];
    var result = '';

    result += pointInCircle([x - 1, y - 1, 1.5]) ? 'inside circle' : 'outside circle';
    result += ' ';
    result += (x >= -1 && x <= 5 && y >= -1 && y <= 1) ? 'inside rectangle' : 'outside rectangle';

    return result;
}

pointInCircleAndOutsideRectangle(['2.5', '2']);