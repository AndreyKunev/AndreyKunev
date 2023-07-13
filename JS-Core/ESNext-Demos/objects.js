const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'Sofia',
    street: 'bul. Bulgaria'
  }
};

// Object destructuring
const { name: personName, age, address: { city }} = person;

console.log(personName);
console.log(age);
console.log(city);

// New object literal
const newPerson = {
  personName,
  age
};

console.log(newPerson);


