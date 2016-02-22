(function () {
    "use strict";

    // maps are designed to hold Key-Value pairs
    // Map's constructor expects array of arrays
    var map = new Map([["name", "Dimitar"], ["age", "26"], ["height", "180"]]);
    for (let [key,value] of map) {
        console.log(`${key} --> ${value}`);
    }
})();