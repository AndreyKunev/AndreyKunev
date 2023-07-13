let input = [
    '1 2',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(' ').map(Number);
let matrix = [];
let rows = arr[0];
let cols = arr[1];

for (let row = 0; row < rows; row++) {
    let column = [];
    for (let col = 0; col < cols; col++) {
        column.push(2 ** (row + col));
    }
    matrix.push(column);
}

console.table(matrix);
let moveSum = BigInt(0);
let rowCoord = -1;
let colCoord = -1;
let up = false;
let right = true;

if (rows == 1 || cols == 1) {
    for (const iterator of matrix.flat(2)) {
        moveSum += BigInt(iterator);
    }
} else {
    while (true) {

        if (up == false && right == true){
            // down and right 
            for (let row = rowCoord + 1, col = colCoord + 1; row < rows && col < cols; row++, col++) {
                
                moveSum += BigInt(matrix[row][col]);
                rowCoord = row;
                colCoord = col;
            }
            if (rowCoord == rows - 1 && colCoord == cols - 1) {
                break;
            } else if (rowCoord == rows - 1) {
                up = true; // if we reach bottom, change direction to go up
            } else if (colCoord == cols - 1) {
                right = false; // if we reach last column, change direction to left
            }
        }

        else if (up == true && right == true){
            // up and right
            for (let row = rowCoord - 1, col = colCoord + 1; row >= 0 && col < cols; row--, col++) {
                
                moveSum += BigInt(matrix[row][col]);
                rowCoord = row;
                colCoord = col;
            }
            if (rowCoord == 0 && colCoord == cols - 1) {
                break;
            } else if (rowCoord == 0) {
                up = false; // if we reach top, change direction to go up
            } else if (colCoord == cols - 1) {
                right = false; // if we reach last column, change direction to left
            }
        }

        else if (up == true && right == false) { 
            // up and left
            for (let row = rowCoord - 1, col = colCoord - 1; row >= 0 && col >= 0; row--, col--) {
                
                moveSum += BigInt(matrix[row][col]);
                rowCoord = row;
                colCoord = col;
            }
            if (rowCoord == 0 && colCoord == 0) {
                break;
            } else if (rowCoord == 0) {
                up = false; // if we reach top, change direction to go up
            } else if (colCoord == 0) {
                right = true; // if we reach first column, change direction to left
            }
        }

        else if (up == false && right == false) {
            // down and left
            for (let row = rowCoord + 1, col = colCoord - 1; row < rows && col >= 0; row++, col--) {
                
                moveSum += BigInt(matrix[row][col]);
                rowCoord = row;
                colCoord = col;
            }
            if (rowCoord == rows - 1 && colCoord == 0) {
                break;
            } else if (rowCoord == rows - 1) {
                up = true; // if we reach bottom, change direction to go up
            } else if (colCoord == 0) {
                right = true; // if we reach first column, change direction to left
            }
        }
    }
}

console.log(moveSum);