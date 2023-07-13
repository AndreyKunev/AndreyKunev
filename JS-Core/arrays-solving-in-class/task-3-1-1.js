const sizeOfMatrix = 5;
const arr = [];

// initialize each row as an empty array of 3 elements
for (let row = 0; row < sizeOfMatrix; row++) {
  arr[row] = Array.from({ length: sizeOfMatrix })
}

console.table(arr);

let row = 0;
let col = 0;

for (let i = 1; i <= sizeOfMatrix * sizeOfMatrix; i++){
  arr[row][col] = i;
  row++;

  if (i % sizeOfMatrix === 0){
    row = 0;
    col++;
  }
}

console.table(arr);