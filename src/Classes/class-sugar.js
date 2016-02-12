(function () {
    "use strict";
    // http://stackoverflow.com/questions/22528967/es6-class-variable-alternatives
    const DEFAULT_NAME = "Spinderman";

    class Person {
        // the line below would cause a ScriptError due to the property initilization style propsed in ES6
        // const DEFAULT_NAME = "Spinderman";
        
        constructor(name) {
            // line below always goes through the setter
            // kind of protective programming
            this.name = name;
        }

        set name(nameValue) {
            this._name = nameValue || DEFAULT_NAME;
        }

        get name() {
            return this._name;
        }

        sayHello() {
            console.log(`Hello, I am ${this.name}`);
        }
        
        toString() {
            console.log(`I am a legend!`);
        }
    }
    
    class Employee extends Person {
    
        constructor(name, sallary) {
            super(name);
            this.sallary = sallary;
        }
    
        set sallary(value) {
            this._sallary = value
        }
    
        get sallary() {
            return this._sallary;
        }
    
        getSallary() {
            console.log(`I just took my sallary. ${this.name} is ${this.sallary} ahead`);            
        }
        
        toString() {
            console.log(`${this.name}: $${this.sallary}`);            
        }
    }

    let person = new Person();
    person.sayHello();
    
    let employee = new Employee("Pesho", 2000);
    employee.sayHello();
    employee.getSallary();
    
    console.log(person.toString());    
    console.log(employee.toString());  
})();