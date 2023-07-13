const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva', 'Georgi', 'Pencho'];

// approach 1

let result = [];
for (let index = 0; index < people.length; index++) {
  const person = people[index]; // 'Ivan'
  let nameChars = Array.from(person); // ['I', 'v', 'a', 'n']
  nameChars.sort(); // ['I', 'a', 'n', 'v']
  let newPerson = nameChars.join(''); // 'Ianv'
  result[index] = newPerson;
}

console.log(result); // [ 'Ianv', 'Maair', 'Sanoty', 'Paert', 'Iav', 'Gegior' ]
result.sort();
console.log(result); // [ 'Gegior', 'Ianv', 'Iav', 'Maair', 'Paert', 'Sanoty' ]