const input = '5';
const print = this.print || console.log;

const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const sizeOfMatrix = +gets();

const matrix = Array.from({ length: sizeOfMatrix }, () => []);
//print(matrix);

let num = 1;

//under the main diagonal
for (let row = sizeOfMatrix - 1; row >= 0; row--) {
  for (let col = 0; col < sizeOfMatrix - row; col++) {
    matrix[row + col][col] = num++;
  }
}

console.table(matrix);

// above the main diagonal w/o main diagonal
for (let col = 1; col < sizeOfMatrix; col++) {
  for (let colAboveDiagonal = col, row = 0; colAboveDiagonal < sizeOfMatrix; colAboveDiagonal++, row++) {
    matrix[row][colAboveDiagonal] = num++;
  }
}


console.table(matrix);

for (let i = 0; i < sizeOfMatrix; i++) {
  print(matrix[i].join(' '));
}