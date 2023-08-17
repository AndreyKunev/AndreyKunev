import data from './people.js';

const namesOfPeopleOver40 = data
  .filter((person) => person.age > 40)
  .map((person) => `${person.firstName} ${person.lastName}`);

console.log(namesOfPeopleOver40);


const namesOfPeopleOver40Reduce = data
  .reduce((acc, person) => {
    if (person.age > 40) {
      acc = [...acc, `${person.firstName} ${person.lastName}`];
    }

    return acc;
  }, []);

console.log(namesOfPeopleOver40Reduce);
