//Problem 1
function isOdd(x) {
    'use strict'
    var i;
    for (i = 0; i < x; i++) {
        console.log(i + ' is odd: ' + (i % 2 !== 0));
    }
}

//Problem 2
function divisibleBy7and5 (x) {
    'use strict'
    var i;
    for (i = 0; i < x; i++) {
        console.log(i + ' is divisible: ' + ((i % 5) === 0 && (i % 7) === 0));
    }
}

//Problem 3
function rectangleArea(width, height) {
    'use strict'
    return width * height;
}

//Problem 4
function thirdGivenIs7(x) {
    "use strict";
    var result = ((x / 100) | 0) % 10;
    if (result === 7) {
        return true;
    }
    return false;
}

//Problem 5
function getThirdBit(x) {
    "use strict"
    if (x & 8) {
        return 1;
    }
    return 0;
}

//Problem 6
function pointInCircle(x, y) {
    'use strict'
    var distanceSquare = x * x + y * y;
    if (distanceSquare > 25) {
        return false;
    }
    return true;
}

//Problem 7
function isPrime(x) {
    'use strict'
    var i, boundary = Math.floor(Math.sqrt(x));
    if (x <= 1) { return false; }
    if (x === 2) { return true; }
    for (i = 2; i <= boundary; i += 1) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

//Problem 8
function trapezoidArea(a, b, h) {
    'use strict'
    return ((a + b) / 2) * h;
}

//Problem 9
function pointInCircleAndOutsideRectangle(x, y) {
    'use strict'
    //debugger;
    if (!pointInCircle(x - 1, y - 1)) { return 'no'; }
    if (x < -1 || x > 5 && y < -1 || y > 1) { return 'yes'; }

    return 'no';
}