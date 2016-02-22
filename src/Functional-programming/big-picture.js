(function () {
    "use strict";

    class Company {

        constructor(name) {
            this.name = name;
            this.employees = [];
        }

        addEmployees(...names) {
            this.employees = this.employees.concat(names);
        }

        *[Symbol.iterator]() {
            for (let employee of this.employees) {
                console.log(`From generator: ${employee}`);
                yield employee;
            }
        }
    }

    // let filter = function* (items, predicate) {
    //     for (let item of items) {
    //         console.log(`--->Filter: ${item}`);
    //         if (predicate(item)) {
    //             yield item;
    //         }
    //     }
    // }
    
    // let take = function* (items, number) {
    //     let count = 0;
    //     if (number < 1) return;
    //     for (let item of items) {
    //         yield item;
    //         count += 1;
    //         if (count >= number) {
    //             return
    //         }
    //     }
    // }

    let count = 0;
    let company = new Company("Bulpros");
    company.addEmployees("Pesho", "Gosho", "Stamat", "Penka", "Geri");

    for (let employee of company) {
        console.log(employee);
    }

    // for (let employee of filter(company, e => e[0] == 'P')) {
    //     count += 1;
    // }
    
    // for (let employee of take(filter(company, e => e[0] == 'P'),1)) {
    //     console.log(`Taken employee: ${employee}`);
    // }

    console.log(`Employes with name starting with 'P': ${count}`);
})();