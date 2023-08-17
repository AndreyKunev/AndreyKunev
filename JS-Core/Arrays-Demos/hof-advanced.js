import data from './people.js';

const filterOverAge = (age) => (person) => person.age > age; // closure here as well

// Standard function
// const filterOverAge = function (age) {
//   // this is the function that the filter itself is expecting and we return it
//   const filterPerson = function(person){
//     return person.age > age;
//   };

//   // Closure or MAGIC :)
//   return filterPerson;
// };

const getName = (person) => `${person.firstName} ${person.lastName}`;

// Standard function
// const getName = function (person) {
//   return `${person.firstName} ${person.lastName}`;
// };

const namesOfPeopleOver40 = data
  .filter(filterOverAge(40))
  .map(getName);

console.log(namesOfPeopleOver40);

const reduceOverAge = (age) => (acc, person) => {
  if (person.age > age) {
    acc = [...acc, `${person.firstName} ${person.lastName}`];
  }

  return acc;
};

const namesOfPeopleOver40Reduce = data
  .reduce(reduceOverAge(40), []);

console.log(namesOfPeopleOver40Reduce);
