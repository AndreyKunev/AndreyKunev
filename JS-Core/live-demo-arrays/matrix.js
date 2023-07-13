// the MATRIX

const width = 6; // how many columns
const height = 6; // how many rows

//const matrix = Array.from({ length: height }, () => Array.from({ length: width }));
const matrix = Array.from({ length: height });
for (let i = 0; i < height; i++) {
  matrix[i] = Array.from({ length: width });
}
// for (let index in matrix) {
//   matrix[index] =  Array.from({ length: width });
// }

console.table(matrix);

let count = 1;
// for (let i = 0; i < height; i++) {
//   for (let j = 0; j < width; j++) {
//     matrix[i][j] = count;
//     count++;
//   }
// }


for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = count;
    count++;
  }
}

console.table(matrix);

console.log("The main diagonal's elements are:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === j) {
      console.log(matrix[i][j]);
    }
  }
}

console.log("The secondary diagonal's elements are:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i + j === matrix.length - 1) {
      console.log(matrix[i][j]);
    }
  }
}

if ([0, 0, 0] == true) {
  console.log('Hi');
}

console.log(Boolean([0, 0, 0]));
