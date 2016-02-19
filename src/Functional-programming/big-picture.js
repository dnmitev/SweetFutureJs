(function () {
    "use strict";

    let sum = 0;
    let numbers = [1, 2, 3, 4, 5];
    
    // code below is not currently implemented in the browsers
    // let iterator = numbers.values();    
    let iterator = numbers[Symbol.iterator]();
    let next = iterator.next();
    while (!next.done) {
        sum += next.value;
        next = iterator.next();
    }

    console.log(`sum = ${sum}`);

    class Company {

        constructor(name) {
            this.name = name;
            this.employees = [];
        }

        addEmployees(...names) {
            this.employees = this.employees.concat(names);
        }
        
        [Symbol.iterator]() {
            return new CompanyIterator(this.employees);
        }
    }
    
    class CompanyIterator {
        // can be used a generator function instead
    
        constructor(array) {
            this.array = array;
            this.index = 0;
        }
    
        next() {
            // custom logic can be put in here
            let result = {
                value: undefined,
                done: true
            };
            
            if (this.index < this.array.length) {
                result.value = this.array[this.index];
                this.index += 1;
            }
            
            return result;
        }
    
    }

    let count = 0;
    let company = new Company("Bulpros");
    company.addEmployees("Pesho", "Gosho", "Stamat", "Penka", "Geri");

    for (var key in company) {
        console.log(company[key]);
    }
   
    // Code below will produce an error because the object person, does not implement its [Symbol.iterator] 
    for (let index of company) {
        console.log(index);
    }
    

})();