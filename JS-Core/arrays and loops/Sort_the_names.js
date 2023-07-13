let input = [
  'Ivan Maria Stoyan Petar Iva'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let names = gets().split(' ');
let sortedNames = [];

for (let i = 0; i < names.length; i++) {
  const element = names[i].split('').sort().join('');
  sortedNames.push(element);
}

print(sortedNames.sort().join(' '));