(function () {
    "use strict";

    let async = false;
    
    let promise = new Promise(function (resolve, reject) {
        resolve();
    });
    
    promise.then(function () {
        // since it's a promise, the code here is not executed line by line
        console.log(`Async inside promise: ${async}`);
    });
    
    async = true;
})();