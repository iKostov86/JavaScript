var arr = [1, 2, 3, 1, 5, 6, 1, 8, 9, 10];

var everyResult = arr.every(function (item) {
    //console.log(item)
    return item < 5;
});

//console.log(result);

var filtered = arr.filter(function (item) {
   var divisor,
       maxDivisor = Math.sqrt(item);

    for (divisor = 2; divisor <= maxDivisor; divisor += 1) {
        if (!(item % divisor)) {
            return false;
        }
    } return item > 1;
});

//console.log(filtered);

//function inRange(number) {
//    return 2 < number && number < 6;
//}

function inRange(from, to) {
    return function (number) {
        return from < number && number < to;
    }
}

var filterResult = arr.filter(inRange(3, 5));

//console.log(filterResult);

var drun = arr.reduce(function (memo, item, index) {
    if (item === memo) {
        console.log(item);
    }
    console.log('---');
    return memo;
});