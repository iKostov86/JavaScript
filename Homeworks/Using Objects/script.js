//Problem 1. Planar coordinates
function planarCoordinates(args) {
    'use strict';
    if(args.length !== 12) {
        throw Error('Missing arguments!');
    }

    function points(x, y) {
        return {
            X: x,
            Y: y,
            distanceBetweenTwoPoints: function(p2) {
                return Math.sqrt((this.X - p2.X) * (this.X - p2.X) + (this.Y - p2.Y) * (this.Y - p2.Y));
            }
        }
    }

    function lines(p1, p2) {
        return {
            P1: p1,
            P2: p2,
            length: p1.distanceBetweenTwoPoints(p2),
            canThreeLinesFormATriangle: function(line2, line3) {
                if((this.length + line2.length) > line3.length &&
                    (this.length + line3.length) > line2.length &&
                    (line2.length + line3.length) > this.length) {
                    return 'Triangle can be built';
                }
                return "Triangle can not be built";
            }
        }
    }

    var x1 = +args[0],
        y1 = +args[1],
        x2 = +args[2],
        y2 = +args[3],
        x3 = +args[4],
        y3 = +args[5],
        x4 = +args[6],
        y4 = +args[7],
        x5 = +args[8],
        y5 = +args[9],
        x6 = +args[10],
        y6 = +args[11],
        p1 = points(x1, y1),
        p2 = points(x2, y2),
        p3 = points(x3, y3),
        p4 = points(x4, y4),
        p5 = points(x5, y5),
        p6 = points(x6, y6),
        line1 = lines(p1, p2),
        line2 = lines(p3, p4),
        line3 = lines(p5, p6);

        console.log(line1.length.toFixed(2));
        console.log(line2.length.toFixed(2));
        console.log(line3.length.toFixed(2));
        console.log(line1.canThreeLinesFormATriangle(line2, line3));
}

// planarCoordinates([
//   '5', '6', '7', '8',
//   '1', '2', '3', '4',
//   '9', '10', '11', '12'
// ]);

//Problem 2. Remove elements
function removeElement(args) {
    'use strict';

    Array.prototype.remove = function(element) {
        for(var i = 0; i < this.length;) {
            if (this[i] === element) {
                this.splice(i, 1);
            } else {
                i += 1;
            }
        }
    };

    var arr = args,
        element = args[0];

    arr.remove(element);
    console.log(arr.join('\n'));
}

// removeElement([ '1', '2', '3', '2', '1', '2', '3', '2' ]);

//Problem 3. Deep copy
function deepCopy(obj) {
    'use strict';
    var prop,
        copies;

    if (Array.isArray(obj)) {
        copies = [];
    } else if (typeof obj === 'object') {
        copies = {};
    } else {
        return obj;
    }

    for (prop in obj) {
        copies[prop] = deepCopy(obj[prop]);
    }

    return copies;
}

var obj = {
    firstProp: [1, 2, 3, 4],
    secondProp: {
        firstFirstProp: 'egati stringa',
        secondSecondProp: [5, 6, 7, 8],
    },
};
console.log(deepCopy(obj));

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
        assocArr = {};

    for(i = 0; i < people.length; i += 1) {
        if(!assocArr[people[i][by]]) {
            assocArr[people[i][by]] = [];
        }

        assocArr[people[i][by]].push(people[i]);
    }

    return assocArr;
}

function makeGroups() {
    var people = [makePerson('Ivaylo', 'Kostov', 29),
            makePerson('Ivan', 'Naidenov', 43),
            makePerson('Ivan', 'Kostov', 55),
            makePerson('Georgi', 'Asparuhov', 43)];

    var ageGroup = {},
        fNameGroup = {},
        lNameGroup = {};

    ageGroup = groupsBy(people, 'age');
    fNameGroup = groupsBy(people, 'firstName');
    lNameGroup = groupsBy(people, 'lastName');

    console.log(ageGroup);
    console.log(fNameGroup);
    console.log(lNameGroup);
}
