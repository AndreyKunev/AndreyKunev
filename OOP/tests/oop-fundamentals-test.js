class Person {
    name;
    
    constructor (name) {
        this.name = name;
    }

    sayName () {
        return `Hi, my name is ${this.name}`;
    }

}

const pete = new Person();

pete.name = 'Pete';

console.log(pete.sayName());

const jeff = new Person();

jeff.name = 'Jeff';

console.log(jeff.sayName());

const ripley = new Person('Ripley');

console.log(ripley.sayName());

let inputDate =  new Date("2022/09/03");

const dueDate = new Date(inputDate);

console.log(dueDate);
console.log(inputDate);
console.log(Date.now() > dueDate);