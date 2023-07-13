let input = ['5',];



let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const matrixSize = Number(gets());

const matrix = Array.from({ length: matrixSize });

// console.log(matrix);

for (let row = 0;row < matrixSize; row++) {
  matrix[row] = Array.from({ length: matrixSize });
}

// console.log(matrix);

let count = 0;
for (let col = 0; col < matrix.length; col++) {
  if (col % 2 === 0) {
    for (let row = 0; row < matrix[col].length; row++) {
      matrix[row][col] = ++count;
    }
  } else {
    for (let row = matrix[col].length - 1; row >= 0; row--) {
      matrix[row][col] = ++count;
    }
  }
}

arrText = '';
for (let row = 0; row < matrix.length; ++row) {
  for (let col = 0; col < matrix[row].length; ++col) {
    arrText += matrix[row][col] + ' ';
  }
  console.log(arrText);
  arrText = '';
}

console.table(matrix);