(function () {
    function sayHello(name = "Bat Georgi") {
        // default param work only on undefined values
        console.log(`Hello, ${name}`);
    }
    
    // call the function with params
    sayHello("Bai Dancho");
    
    // call the function without params
    sayHello();
    
    sayHello(' ');
})();