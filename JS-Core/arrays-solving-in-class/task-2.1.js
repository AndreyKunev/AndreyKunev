const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva', 'Georgi', 'Pencho'];

// approach 2

let input = ['Ivan Maria Stoyan Petar Iva'];
let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let names = gets() // 'Ivan Maria Stoyan Petar Iva'
  .split(' '); //  ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva', 'Georgi', 'Pencho']

for (let i = 0; i < names.length; i++) {
  // name[0] = 'Ivan'
  names[i] = names[i]
    .split('') 
    .sort()
    .join('');
  
  // names[0] = 'Ianv'
}

// names is [ 'Ianv', 'Maair', 'Sanoty', 'Paert', 'Iav']

print(names.sort() // ['Ianv', 'Iav', 'Maair', 'Paert', 'Sanoty' ]
.join(' ')); // Ianv Iav Maair Paert Sanoty