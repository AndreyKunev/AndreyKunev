import { Person } from './person.js';

const personOne = new Person('Ivan');
personOne.sayIntroduction();

// const personTwo = new Person('a'); - Will throw error due to invalid name
// const personTwo = new Person(null); - Will throw error due to invalid name

personOne.name = 'Pesho'; // This calls the set name property

let personName = personOne.name; // This calls the get name property
console.log(personOne.name); // This calls the get name property

personOne.sayIntroduction(); // This also calls the get name property inside itself

// const personOne.name = 'a'; - Will throw error due to invalid name
// const personOne.name = null; - Will throw error due to invalid name