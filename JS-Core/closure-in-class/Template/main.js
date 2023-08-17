import { byKey, findBy, isBetween, isHigher, isLower, startsWith } from './utils.js';
import people from './people.js';

const sortedByAge = people.sort(byKey('age', 'asc'));

console.log(sortedByAge);

// const person = people.find(findBy('city', 'Sofia'));

// console.log(person);
