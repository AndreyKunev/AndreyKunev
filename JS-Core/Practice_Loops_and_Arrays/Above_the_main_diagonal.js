let input = [
    '30',
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let rows = n;
let cols = n;

//const matrix = Array.from({ length: n }, () => []);

const matrix = Array.from({ length: rows });
for (let i = 0; i < rows; i++) {
  matrix[i] = Array.from({ length: cols });
}

for (let row = 0; row < rows; row++) {
    
    for (let col = 0; col < cols; col++) {
        matrix[row][col] = 2 ** (row + col); 
        
    }
}


let sum = 0n;
let row = 0;

while (row < rows) {
    let col = row +1;

    while (col < cols) {
    
    sum += BigInt(matrix[row][col]);
    col++;
    }

    row++;
}



console.log(sum);

