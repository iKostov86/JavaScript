//Problem 1. English digit
function englishDigit(number) {
    'use strict';
    switch(number % 10) {
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
    }
}

//Problem 2. Reverse number
function reverseNumber(number) {
    'use strict';
    var i,
        str = '' + number,
        reversed = '';

    for(i = str.length - 1; i > -1; i -= 1) {
        reversed += str[i];
    }

    console.log(reversed);
}

//Problem 3. Occurrences of word
function occurrencesOfWord(text, targetWord, caseSensitive) {
    'use strict';
    var word,
        words,
        dictionary;

    caseSensitive = caseSensitive || false;

    if(caseSensitive) {
        text = text.toLowerCase();
    }

    words = text.split(' ');
    dictionary = [];

    for(word in words) {
        if(dictionary[words[word]]) {
            dictionary[words[word]] += 1;
        } else {
            dictionary[words[word]] = 1;
        }
    }

    console.log('The target occurrences are: ' + dictionary[targetWord]);
}

//Problem 4. Number of elements
function numberOfElements(element) {
    'use strict';
    var arrOfElements = document.getElementsByTagName(element);

    console.log(element + ' has ' + arrOfElements.length + ' times');
}

//Problem 5. Appearance count
function appearanceCount(arr, number) {
    'use strict';
    var i,
        count;

    for(i = 0, count = 0; i < arr.length; i += 1) {
        if(arr[i] === number) {
            count += 1;
        }
    }

    return count;
}

function appearanceCountTest() {
    var x = appearanceCount([3], 3);
    if(x !== 1) {
        return 'Error!';
    }

    x = appearanceCount([], 12);
    if(x !== 0) {
        return 'Error!';
    }

    x = appearanceCount([1, 7, 5, 5, 3], 0);
    if(x !== 0) {
        return 'Error';
    }

    x = appearanceCount([1, 2, 3, 4], 1);
    if(x !== 1) {
        return 'Error';
    }

    x = appearanceCount([1, 2, 3, 4], 4);
    if(x !== 1) {
        return 'Error';
    }

    return 'Test passed!';
}

//Problem 6. Larger than neighbours
function largerThanNeighbours(arr, position) {
    if(arr[position - 1] && arr[position] && arr[position + 1]) {
        if(arr[position] > arr[position - 1] && arr[position] > arr[position + 1]) {
            //console.log('The number at position ' + position + ' is larger than its neighbours.');
            return true;
        } else {
            //console.log('The number at position ' + position + " isn't larger than its neighbours.");
            return false;
        }
    } else {
        //console.log("Some at positions doesn't exist.");
        return false;
    }
}

//Problem 7. First larger than neighbours
function firstLargerThanNeighbours(arr) {
    var i,
        isLarger;

    for(i = 1; i < arr.length; i += 1) {
        isLarger = largerThanNeighbours(arr, i);
        if(isLarger) {
            console.log(arr[i] + ' is first number which is larger than its neighbours.');
            return;
        }
    }

    console.log("Number which is larger than its neighbours doesn't exist");
}