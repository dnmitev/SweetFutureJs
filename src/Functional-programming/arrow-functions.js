(function () {
    "use strict";

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let odds = [];

    numbers.forEach(num => {
        if (num & 1) {
            odds.push(num);
        }
    });

    console.log(odds.join(" ; "));    
})();