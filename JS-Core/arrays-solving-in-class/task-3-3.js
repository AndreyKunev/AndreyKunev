const sizeOfMatrix = 5;
const arr = [];

// initialize each row as an empty array of 3 elements
for (let row = 0; row < sizeOfMatrix; row++) {
  arr[row] = Array.from({ length: sizeOfMatrix })
}

console.table(arr);

let startRow = sizeOfMatrix - 1;
let startCol = 0;
let num = 1;

while(num <= sizeOfMatrix*sizeOfMatrix){
  let row = startRow;
  let col = startCol;

  while (row < arr.length && col < arr.length && arr[row][col] === undefined){
    arr[row][col]  = num;

    num++;
    row++;
    col++;
  }

  if (startRow > 0){
    startRow--;
    startCol = 0;
  } else {
    startRow = 0;
    startCol++;
  }
}

console.table(arr);