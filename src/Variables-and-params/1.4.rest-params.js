(function () {
    "use strict";
    
    function getSum(name, ...numbers) {
        let result = 0;
        numbers.forEach(x => result += x);
        
        return result;
    }
    
    console.log(getSum('Pesho', 1, 2, 3, 4));
    
    // spread operator
    var a = ['asd', 'bca', 'rte'];
    var b = [1, 2, 3, ...a, 7, 8, 9];
    
    console.log(b);
})();