//1. Vehicles
function solve(arguments) {
    function vehicles(number) {
        'use strict';
        var wheels = [10, 4, 3],
            count,
            i,
            j;

        for(i = 0; i < 3; i += 1) {
            number = number % wheels[i];
            if(!number) break;
            for(j = 0; number != 0; j += 1) {
                if(j === 2) j = 0
            }
        }
    }
}