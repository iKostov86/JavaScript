//Problem 1. Increase array members
function increaseArrayMembers() {
    var i,
        arr;

    arr = [];
    for(i = 0; i < 20; i += 1) {
        arr[i] = i * 5;
    }

    console.log(arr);
}

//Problem 2. Lexicographically comparison
function lexicographicallyComparison() {
    var i,
        arr1,
        arr2,
        length;

    arr1 = ['b', 'q'];
    arr2 = ['f', 'a', 'a'];
    length = Math.min(arr1.length, arr2.length);
    for(i = 0; i < length; i += 1) {
        if(arr1[i] > arr2[i]) {
            return 'arr1 is bigger than arr2';
        } else if(arr1[i] < arr2[i]) {
            return 'arr2 is bigger than arr1';
        }
    }

    return 'arrays are equal';
}

//Problem 3. Maximal sequence
function maximalSequence(arr) {
    var i,
        bestCount = 1,
        tempCount = 1,
        bestElement = arr[0],
        tempElement = arr[0];

    for(i = 1; i <= arr.length; i += 1) {
        if(arr[i] === tempElement) {
            tempCount += 1;
        } else {
            if(bestCount < tempCount) {
                bestCount = tempCount;
                bestElement = tempElement;
            }

            tempCount = 1;
            tempElement = arr[i];
        }
    }

    for(i = 1; i <= bestCount; i += 1) {
        console.log(bestElement);
    }
}

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
        bestValue = 0,
        bestKey,
        arrOfFrequency = [];

    for(i = 0; i < arr.length; i += 1) {
        if(arrOfFrequency[arr[i]]) {
            arrOfFrequency[arr[i]] += 1;
        } else {
            arrOfFrequency[arr[i]] = 1;
        }
    }

    for(var item in arrOfFrequency) {
        if(bestValue < arrOfFrequency[item]) {
            bestValue = arrOfFrequency[item];
            bestKey = item;
        }
    }

    console.log(bestKey + '(' + bestValue + ' times)');
}

//Problem 7. Binary search
function binarySearch(arr, element) {
    var i,
        j,
        index;

    for(i = 0, j = arr.length - 1; !index;) {
        if(arr[(j - i) / 2] < element) {
            j = ((j - i) / 2) - 1;
        } else if(arr[(j - i) / 2] > element) {
            i = ((j - i) / 2) + 1;
        } else {
            index = (j - i) / 2;
        }
    }

    console.log('Index is: ' + index);
}