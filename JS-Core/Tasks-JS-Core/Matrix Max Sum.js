let input = [
    '6',
    '1 2 3 4 5 6',
    '2 3 4 5 6 7',
    '6 5 4 3 2 1',
    '3 4 5 6 7 8',
    '4 5 6 7 8 9',
    '9 8 7 6 5 4',
    '3 5 3 -5 -4 -2',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let matrix = [];
for (let index = 0; index < n; index++) {
    let row = gets().split(' ').map(Number);
    matrix.push(row);
}

console.table(matrix);
const coordinates = gets().split(' ').map(Number);
let sums = [];
for (let index = 0; index < coordinates.length; index++) {
    let rowCoord = coordinates[index];
    let colCoord = coordinates[index + 1];
    if (rowCoord > 0 && colCoord > 0 ) {
        let sum = 0;
        let colLoopDone = false; // check if we need to move by column or row
        for (let row = rowCoord - 1; row >= 0; row--) {
            if (colLoopDone == true) {
                const element = matrix[row][colCoord - 1];
                sum += element;
            } else {
                for (let col = 0; col < colCoord; col++) {
                    const element = matrix[row][col];
                    sum += element;
                }
            }
            colLoopDone = true;
        }
        sums.push(sum);
    }

    if (rowCoord < 0 && colCoord < 0) {
        rowCoord *= -1;
        colCoord *= -1;
        let sum = 0;
        let colLoopDone = false; // check if we need to move by column or row
        for (let row = rowCoord - 1; row < n; row++) {
            if (colLoopDone == true) {
                const element = matrix[row][colCoord - 1];
                sum += element;
            } else {
                for (let col = colCoord - 1; col < matrix[0].length; col++) {
                    const element = matrix[row][col];
                    sum += element;
                }
            }
            colLoopDone = true;
        }
        sums.push(sum);
    }

    if (rowCoord < 0 && colCoord > 0) {
        rowCoord *= -1;
        let sum = 0;
        let colLoopDone = false; // check if we need to move by column or row
        for (let row = rowCoord - 1; row >= 0; row--) {
            if (colLoopDone == true) {
                const element = matrix[row][colCoord - 1];
                sum += element;
            } else {
                for (let col = colCoord - 1; col < matrix[0].length; col++) {
                    const element = matrix[row][col];
                    sum += element;
                }
            }
            colLoopDone = true;
        }
        sums.push(sum);
    }

    if (rowCoord > 0 && colCoord < 0) {
        colCoord *= -1;
        let sum = 0;
        let colLoopDone = false; // check if we need to move by column or row
        for (let row = rowCoord - 1; row < n; row++) {
            if (colLoopDone == true) {
                const element = matrix[row][colCoord - 1];
                sum += element;
            } else {
                for (let col = 0; col < colCoord; col++) {
                    const element = matrix[row][col];
                    sum += element;
                }
            }
            colLoopDone = true;
        }
        sums.push(sum);
    }
    index++;
}

console.log(Math.max(...sums));