//Problem 1. Numbers
function printsNumbers(n) {
    'use strict';
    var i;

    for(i = 1; i <= n; i += 1 ) {
        console.log(i);
    }
}

//Problem 2. Numbers not divisible
function printsNumberThatAreNotDivisibleBy3And7(n) {
    'use strict';
    var i;

    for (i = 1; i <= n; i += 1) {
        if (i % 3 && i % 7) {
            console.log(i);
        }
    }
}

//Problem 3. Min/Max of sequence
function minMaxOfSequence() {
    'use strict';
    var biggest,
        length,
        i;

    biggest = arguments[0];
    length = arguments.length;

    for (i = 1; i < length; i += 1) {
        if (biggest < arguments[i]) {
            biggest = arguments[i];
        }
    }

    console.log(biggest);
}

//Problem 4. Lexicographically smallest
function lexicographicallySmallest(element) {
    'use strict';
    var i,
        biggest = 'a',
        smallest = 'Z',
        prop;

    for (prop in element) {
        if (biggest < prop) {
            biggest = prop;
        }
        if (smallest > prop) {
            smallest = prop;
        }
    }

    console.log('The biggest is: ' + biggest);
    console.log('The smallest is: ' + smallest);
}