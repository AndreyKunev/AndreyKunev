import { Person } from './person.js';

const personOne = new Person('Ivan', 'Ivanov', 9010101234);
personOne.sayIntroduction();

personOne.firstName = 'Pesho'; // This calls the set firstName property
personOne.lastName = 'Peshov'; // This calls the set lastName property

console.log(personOne.fullName); // This calls the get fullName property