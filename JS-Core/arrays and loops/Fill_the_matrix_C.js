let input = [
    '3'
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

const matrix = Array.from({ length: n }, () => []);


let counter = 1;


for (let i = n - 1; i >= 0; i--) {

  for (let j = 0; j < n - i; j++) {

    matrix[i + j][j] = counter++;

  }

}


for (let i = 1; i < n; i++) {

   for (let j = i, k = 0; j < n; j++, k++) {

     matrix[k][j] = counter++;

   }

}


for (let i = 0; i < n; i++) {

   print(matrix[i].join(' '));

}

// second solution

// const sizeOfMatrix = 5;
// const arr = [];

// // initialize each row as an empty array of 3 elements
// for (let row = 0; row < sizeOfMatrix; row++) {
//   arr[row] = Array.from({ length: sizeOfMatrix })
// }

// console.table(arr);

// let startRow = sizeOfMatrix - 1;
// let startCol = 0;
// let num = 1;

// while(num <= sizeOfMatrix*sizeOfMatrix){
//   let row = startRow;
//   let col = startCol;

//   while (row < arr.length && col < arr.length && arr[row][col] === undefined){
//     arr[row][col]  = num;

//     num++;
//     row++;
//     col++;
//   }

//   if (startRow > 0){
//     startRow--;
//     startCol = 0;
//   } else {
//     startRow = 0;
//     startCol++;
//   }
// }

// console.table(arr);
