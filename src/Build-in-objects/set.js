(function () {
    "use strict";

    let set = new Set([1, 2, 3, 3, 2, 1, 3]);
    console.log(`Size of set: ${set.size}`);
    console.log(`Set has 1 -> ${set.has(1) }`);
    
    set.add(5);
    console.log(`Set has 5 -> ${set.has(5) }`);
    
    set.delete(1);
    console.log(`Set has 1 -> ${set.has(1) }`);
    
    set.clear();
    console.log(`Size of set: ${set.size}`);  
})();