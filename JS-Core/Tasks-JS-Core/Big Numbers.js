let input = [
    '3 4',
    '8 3 3',
    '6 2 4 2',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let arrSizes = gets().split(' ').map(Number);


let numOne = BigInt(gets().split(' ').reverse().join(''));
let numTwo = BigInt(gets().split(' ').reverse().join(''));
let result = numOne + numTwo;
let resultArr = [];



console.log(result.toString().split('').reverse().join(' '));


