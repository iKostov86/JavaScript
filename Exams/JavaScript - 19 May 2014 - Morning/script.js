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