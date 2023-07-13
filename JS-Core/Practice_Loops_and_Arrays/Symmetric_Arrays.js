let input = [
    '4',
    '1 2 3 2 1',
    '2 1',
    '1 2 2 1',
    '4',
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfArrays = Number(gets());

for (let n = 0; n < numberOfArrays; n++) {
    const arr = gets().split(' ').map(Number); // get the array
    
    let isSymmetric = true; // set true by default

    // index in for loop is limited to arr.length / 2 so we can compare elements adequately
    // and can ignore middle in case of odd number of arrays elements 
    for (let index = 0; index < arr.length / 2; index++) {
        const element = arr[index];  //starts from the first element
        const elementTwo = arr[arr.length - 1 - index]; // starts from the last element
        if (element !== elementTwo) {
            isSymmetric = false;
        }
    }
    // if to satisfy the judge (hehe)
    if (isSymmetric) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}