let input = [
    '4'
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

const arr = [];

// creating variables for rows and columns because it's more understandable and readable this way
const rows = n;
const cols = n;
let result = '';

// Despite the obvious +1 increment being row by row then onto the next column
// I decided to go column by column and then onto the next row
// first for is for rows
for (let row = 0; row < rows; row++) {
  arr[row] = [];

// second is for columns
  for (let col = 0; col < cols; col++) {
    if (col === 0) {
      arr[row][col] = row + 1;
    } else {
      arr[row][col] = arr[row][col - 1] + n;
    }
    result += `${arr[row][col]} `;
  }

result += '\n';
}

print(result);

console.table(arr);

