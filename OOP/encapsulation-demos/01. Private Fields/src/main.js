import { Person } from './person.js';

const personOne = new Person('Ivan');
personOne.sayIntroduction();

// const personTwo = new Person('a'); - Will throw error due to invalid name
// const personTwo = new Person(null); - Will throw error due to invalid name

personOne.setName('Pesho');
personOne.sayIntroduction();

// const personOne.setName('a'); - Will throw error due to invalid name
// const personOne.setName(null); - Will throw error due to invalid name