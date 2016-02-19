(function () {
    "use strict";

    let numbers = function* (start = 0, end = 5) {
        for (let i = start; i <= end; i++) {
            if (i & 1) {
                yield i;
            }
        }
    };

    
    let sum = 0;
    // code below is what's happening behind the scenes when we use the 'for of' operator
    let iterator = numbers(0,10);
    let next = iterator.next();
    while (!next.done) {
        sum += next.value;
        next = iterator.next();
    }

    console.log(`sum = ${sum}`);
})();