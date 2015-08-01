//1. Vehicles
function vehicles(args) {
    'use strict';
    var wheels = [10, 4, 3],
        count = 0,
        number = +args[0],
        rows,
        cols,
        k;

    for(rows = 0; rows <= number / 10; rows += 1) {
        for(cols = 0; cols <= number / 4; cols += 1) {
            for(k = 0; k <= number / 3; k += 1) {
                if((rows * 10 + cols * 4 + k * 3) === number) {
                    count += 1;
                }
            }
        }
    }

    return count;
}

//2. Paths
function paths(args) {
    'use strict';
    var sum = 0,
        rows = 0,
        cols = 0,
        direction,
        dimension = args[0].split(' '),
        matrix = args.slice(1).map(function(item) {
            return item.split(' ');
        }),
        difference = {
            u: -1,
            d: 1,
            l: -1,
            r: 1
        };
    while(rows >= 0 && cols >= 0 && rows < dimension[0] && cols < dimension[1]) {
        if(!matrix[rows][cols]) {
            return 'failed at (' + rows + ', ' + cols + ')';
        }
        sum += ((1 << rows) + cols);
        direction = matrix[rows][cols];
        matrix[rows][cols] = '';
        rows += difference[direction.charAt(0)];
        cols += difference[direction.charAt(1)];
    }
    return 'successed with ' + sum;
}