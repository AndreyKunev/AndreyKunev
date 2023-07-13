let input = [
    '6'
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

// creating variables for rows and columns because it's more understandable and readable this way
const rows = n;
const cols = n;

let counter = 0;


const matrix = Array.from({ length: rows });
for (let i = 0; i < rows; i++) {
  matrix[i] = Array.from({ length: cols });
}

for (let col = 0; col < cols; col++) {
    
    if (col % 2 == 0 && col != 0) {
        counter += n; // we need to increase counter for the first non-zero even column, 
                     //otherwise even columns will be a flipped version of the column before them
    }                   

    for (let row = 0; row < rows; row++) {
        counter++;
        if (col % 2 == 0) {
            matrix[row][col] = counter;
        } else {
            counter--; // decrement counter to get the right order on odd columns
            matrix[row][col] = counter + n - row;
        }
    }
}

for (let index = 0; index < matrix.length; index++) {
    console.log(matrix[index].join(' '));
}
 console.table(matrix);

