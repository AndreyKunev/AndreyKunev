// Write a program that fills and prints a matrix of size (n, n) by filling the columns first,
// starting with the number 1 and increasing with one at every position, as shown below.

// 1    4   7

// 2    5   8

// 3    6   9

let input = ['5'];
let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input from the system
const sizeOfMatrix = +gets();

// Process the data
const rows = sizeOfMatrix;
const columns = sizeOfMatrix;
const matrix = [];

let table = '';

for (let col = 0; col < columns; col++) {
  matrix[col] = [];

  for (let row = 0; row < rows; row++) {
    matrix[col][row] = (col + 1) + (row * sizeOfMatrix);
    table = table + matrix[col][row] + ' ';
  }
  console.log(table);
  table = '';
}