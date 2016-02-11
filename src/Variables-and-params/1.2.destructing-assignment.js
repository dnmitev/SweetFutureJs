(function () {
    "use strict";

    let x = 1,
        y = 2;

    [x, y] = [y, x];

    console.log(`x = ${x}`);
    console.log(`y = ${y}`);

    //     let x = 1,
    //         y = 2,
    //         z = 3;
    // 
    //     [x, z, y] = [y, y, x];
    // 
    //     console.log('x = ' + x);
    //     console.log('y = ' + y);
    //     console.log('z = ' + z);
    
    // destructing an object
    // let { firstName, lastName} = {
    //     firstName: 'Dimitar',
    //     lastName: 'Mitev',
    //     company: 'Bulpros',
    //     job: 'developer'
    // };
    // 
    // console.log(firstName);
    // console.log(lastName);
})();