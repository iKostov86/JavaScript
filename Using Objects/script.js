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

        //line1.length = 5;
        //line2.length = 8;
        //line3.length = 3;

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