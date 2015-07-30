//1. Vehicles
function vehicles(args) {
    'use strict';
    var wheels = [10, 4, 3],
        count = 0,
        number = +args[0],
        i,
        j,
        k;

    for(i = 0; i <= number / 10; i += 1) {
        for(j = 0; j <= number / 4; j += 1) {
            for(k = 0; k <= number / 3; k += 1) {
                if((i * 10 + j * 4 + k * 3) === number) {
                    count += 1;
                }
            }
        }
    }

    return count;
}

//2. Paths
function paths() {
    'use strict';
    //debugger;
    var args = [].slice.call(arguments[0]),
        temp = args[0].split(' '),
        rows = temp[0],
        cols = temp[1],
        matrix = [],
        used = [],
        sum = 0,
        i,
        j;

    temp = [];
    matrix.length = rows;
    used.length = rows;
    for (i = 0; i < rows; i += 1) {
        matrix[i] = new Array(cols);
        used[i] = new Array(cols);
        temp = args[i + 1].split(' ');
        for (j = 0; j < cols; j += 1) {
            matrix[i][j] = temp[j];
            used[i][j] = undefined;
        }
    }

    i = 0;
    j = 0;
    //debugger;
    while(i >= 0 && i < rows && j >= 0 && j < cols) {
        if(!!used[i][j]) {
            return 'failed at (' + i + ', ' + j + ')';
        }
        used[i][j] = true;
        sum += Math.pow(2, i) + j;
        if(matrix[i][j].charAt(0) == 'd' && matrix[i][j].charAt(1) == 'r') {
            i += 1;
            j += 1;
        } else if(matrix[i][j].charAt(0) == 'd' && matrix[i][j].charAt(1) == 'l') {
            i += 1;
            j -= 1;
        } else if(matrix[i][j].charAt(0) == 'u' && matrix[i][j].charAt(1) == 'r') {
            i -= 1;
            j += 1;
        } else {
            i -= 1;
            j -= 1;
        }
    }

    return 'successed with ' + sum;
}

console.log(paths([
        '3 5',
        'dr dl dr ur ul',
        'dr dr ul ur ur',
        'dl dr ur dl ur'
    ]
));