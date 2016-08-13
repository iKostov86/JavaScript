// Problem 1. Increase array members
function increaseArrayMembers(args) {
    var num = +args[0],
        arr = [];

    if (1 <= num && num <= 20) {
        for(var i = 0; i < num; i += 1) {
            arr[i] = i * 5;
            console.log(arr[i]);
        }
    }
}

// Problem 2. Lexicographical comparison
function lexicographicalComparison(args) {
    var firstStr,
        secondStr,
        input = args[0].split('\n');

    firstStr = input[0].trim();
    secondStr = input[1].trim();

    if (firstStr > secondStr) {
        return '>';
    } else if (firstStr < secondStr) {
        return '<';
    } else {
        return '=';
    }
}

// console.log('>');
// lexicographicalComparison(['hello\nhalo']);

// Problem 3. Maximal sequence
function maximalSequence(args) {
    var i,
        element,
        count = 1,
        bestCount = 1,
        arr = args[0].split('\n');

    if (!+arr[0] || isNaN(arr[0] || typeof arr[0] === 'undefined' && +arr[0] == null)) {
        console.log('0');
    }

    for(i = 1; i < arr[0]; i += 1) {
        if(+arr[i] == element) {
            count += 1;
        } else {
            if(bestCount <= count) {
                bestCount = count;
            }

            element = +arr[i];
            count = 1;
        }
    }

    console.log(bestCount);
}

maximalSequence(['0']);
// maximalSequence(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']);

//Problem 4. Maximal increasing sequence
function maximalIncreasingSequence(arr) {
    var i,
        bestArr = [arr[0]],
        tempArr = [arr[0]];

    for(i = 1; i <= arr.length; i += 1) {
        if(arr[i] > tempArr[tempArr.length - 1]) {
            tempArr.push(arr[i]);
        } else {
            if(tempArr.length > bestArr.length) {
                bestArr = tempArr;
            }

            tempArr = [arr[i]];
        }
    }

    console.log(bestArr);
}

//Problem 5. Selection sort
function selectionSort(arr) {
    var i,
        j,
        tempIndex,
        tempSmallest;

    for(i = 0; i < arr.length; i += 1) {
        tempIndex = i;
        tempSmallest = arr[i];

        for(j = i + 1; j < arr.length; j += 1) {
            if(tempSmallest > arr[j]) {
                tempIndex = j;
                tempSmallest = arr[j];
            }
        }

        arr[tempIndex] = arr[i];
        arr[i] = tempSmallest;
    }
}

//Problem 6. Most frequent number
function mostFrequentNumber(arr) {
    var i,
        item,
        bestValue = 0,
        arrOfFrequency = [];

    for(i = 0; i < arr.length; i += 1) {
        if(arrOfFrequency[arr[i]]) {
            arrOfFrequency[arr[i]] += 1;
        } else {
            arrOfFrequency[arr[i]] = 1;
        }
    }

    for(item in arrOfFrequency) {
        if(bestValue < arrOfFrequency[item]) {
            bestValue = arrOfFrequency[item];
        }
    }

    for(item in arrOfFrequency) {
        if(arrOfFrequency[item] === bestValue) {
            console.log(item + '(' + bestValue + ' times)');
        }
    }
}

//Problem 7. Binary search
function binarySearch(arr, element) {
    var i,
        j,
        tempIndex,
        targetIndex;

    for(i = 0, j = arr.length - 1; !targetIndex;) {
        tempIndex = (j - i) / 2 | 0 + i;
        if(i < j) {
            return -1;
        }
        if(arr[tempIndex] < element) {
            i = tempIndex + 1;
        } else if(arr[tempIndex] > element) {
            j = tempIndex - 1;
        } else {
            targetIndex = tempIndex;
        }
    }

    console.log('Index is: ' + targetIndex);
}

function someFunc() {
    var arr = [3, 5, 2, 9, 1, 8, 0, 4, 7, 6];
    console.log(arr);

    arr.sort(function(a, b) {
        console.log(a);
        console.log(b);
        console.log(a - b);
        console.log(arr);
        console.log('----------')
        return a - b;
    });
}