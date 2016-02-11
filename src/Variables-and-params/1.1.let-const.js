(function () {
    "use strict";

    const DEFAULT_GREETING = "Hello World!";

    var notScoped = 10;
    // uncomment to demonstrate 'let' behaviour
    // let scoped = "I am a legend";

    if (true) {
        let scoped = 'I am scoped variable';
        // new const syntax has also a block scope
        // const SCOPED_CONST = "I am a scoped!";
        console.log(`notScoped --> ${notScoped}`);
        console.log(`scoped --> ${scoped}`);
        // console.log(SCOPED_CONST);
        console.log('-----------------------------------------------')
    }

    // console.log(`notScoped --> ${notScoped}`);
    // console.log(`scoped --> ${scoped}`);
    // console.log('-----------------------------------------------')
    
    // DEFAULT_GREETING = "Ko staa, brat";
    // this will produce a ScriptError because SCOPED_CONST is not defined
    // console.log(SCOPED_CONST);
    console.log(DEFAULT_GREETING);
})();