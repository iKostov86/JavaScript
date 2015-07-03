//Problem 1. Planar coordinates
function planarCoordinates(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) {
    'use strict';
    if(arguments.length !== 12) {
        console.log('Missing arguments!');
        return;
    }
    var p1 = points(x1, y1),
        p2 = points(x2, y2),
        p3 = points(x3, y3),
        p4 = points(x4, y4),
        p5 = points(x5, y5),
        p6 = points(x6, y6),
        line1 = lines(p1, p2),
        line2 = lines(p3, p4),
        line3 = lines(p5, p6);

        console.log(line1.length);
        console.log(line2.length);
        console.log(line3.length);

        console.log(line1.canThreeLinesFormATriangle(line2, line3));
}

function points(x, y) {
    'use strict';
    return {
        X: x,
        Y: y,
        distanceBetweenTwoPoints: function(p2) {
            return (this.X - p2.X) * (this.X - p2.X) + (this.Y - p2.Y) * (this.Y - p2.Y);
        }
    }
}

function lines(p1, p2) {
    'use strict';
    return {
        p1:p1,
        p2:p2,
        length: p1.distanceBetweenTwoPoints(p2),
        canThreeLinesFormATriangle: function(line2, line3) {
            if((this.length + line2.length) > line3.length &&
                (this.length + line3.length) > line2.length &&
                (line2.length + line3.length) > this.length) {
                return 'YES';
            }
            return 'NO';
        }
    }
}

//Problem 2. Remove elements
Array.prototype.remove = function(element) {
    for(var i = 0; i < this.length;) {
        if (this[i] === element) {
            this.splice(i, 1);
        } else {
            i += 1;
        }
    }
};

function removeElements(arr, element) {
    'use strict';
    arr.remove(element);
    console.log(arr);
}

//Problem 3. Deep copy
function deepCopy(obj) {
    'use strict';
    var prop,
        copied = {};

    for (prop in obj) {
        copied[prop] = obj[prop];
    }

    return copied;
}

//Problem 4. Has property
function hasProperty(obj, property) {
    'use strict';
    for(var prop in obj) {
        if(prop === property) {
            return true;
        }
    }

    return false;
}

//Problem 5. Youngest person
function youngestPerson() {
    'use strict';
    var i,
        people = [makePerson('Ivaylo', 'Kostov', 29),
                    makePerson('Ivan', 'Naidenov', 43),
                        makePerson('Georgi', 'Asparuhov', 69)],
        youngest = 0;

    for(i = 1; i < people.length; i += 1) {
        if(people[i].age < people[youngest].age) {
            youngest =  i;
        }
    }

    console.log('The youngest human is: ' + people[youngest].toString() + '.');
}

function makePerson(firstName, lastName, age) {
    'use strict';
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        toString: function() {
            return this.firstName + ' ' +  this.lastName;
        }
    }
}

//Problem 6.
function groupsBy(people, by) {
    'use strict';
    var i,
        tempArr = [];

    for(i = 0; i < people.length; i += 1) {
        tempArr[i] = people[i][by];
    }

    return tempArr;
}

function makeGroups() {
    var people = [makePerson('Ivaylo', 'Kostov', 29),
            makePerson('Ivan', 'Naidenov', 43),
            makePerson('Georgi', 'Asparuhov', 69)];

    var assocArr = {};

    assocArr['firstName'] = groupsBy(people, 'firstName');
    assocArr['lastName'] = groupsBy(people, 'lastName');
    assocArr['age'] = groupsBy(people, 'age');

    console.log(assocArr);
}
