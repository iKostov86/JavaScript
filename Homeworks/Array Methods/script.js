//Problem 1. Make person
function makePerson(fName, lName, age, gender) {
    'use strict';
    return {
        firstName: fName,
        lastName: lName,
        age: age,
        gender: gender,
        toString: function() {
            return(this.firstName + ' ' + this.lastName);
        }
    };
}

function makePersonApp() {
    'use strict';
    var i,
        peopleArr = [],
        firstNames = ['Kiril', 'Ivaylo', 'Stoqn', 'Evlogi', 'Ivan', 'Georgi', 'Gavril', 'Encho', 'James', 'John'];

    for(i = 0; i < 10; i += 1) {
        peopleArr[i] = makePerson(firstNames[i], 'Last' + i, 30 - i, true);
        console.log(peopleArr[i]);
    }

    return peopleArr;
}

//Problem 2. People of age
function peopleOfAge(arr) {
    'use strict';
    return arr.every(function(person) {
            return person.age > 17;
        }
    );
}

//Problem 3. Underage people
function underagePeople(arr) {
    'use strict';
    var result = arr.filter(function(person) {
        return person.age < 25;
    });

    result.forEach(function(person) {
       console.log(person.toString);
    });
}

//Problem 4. Average age of males
function averageAgeOfMales(arr) {
    'use strict';
    var men = arr.filter(function(element) {
            return element.gender;
        }),
        averageAge = men.reduce(function(sumOfAges, person) {
            return sumOfAges + person.age;
        }, 0);

    return averageAge / men.length;
}

//Problem 5. Youngest person
function youngestPerson(arr) {
    'use strict';
    arr.sort(function(a, b) {
        if (a.age < b.age) {
            return -1;
        } else if (a.age > b.age) {
            return 1;
        } else {
            return 0;
        }
    });

    var result = arr.find(function(item) {
        return item.gender;
    });

    return result.toString;
}

if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

//Problem 6. Group people
function groupPeople(arr) {
    'use strict';

    return arr.reduce(function(result, item) {
        if (!result[item.firstName[0]]) {
            result[item.firstName[0]] = [];
        }
        result[item.firstName[0]].push(item);
        return result;
    }, {});
}