const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

// reverse array
let reversedArr = [];

for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    reversedArr.push(element);
}
console.log(reversedArr);
// create a copy

const copyArray = arr.slice();
//console.log(copyArray);

// find 10

console.log(arr.includes(10));

// return first number greater than 6

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > 6) {
        console.log(element);
        break;
    }
}

// remove duplicates
let noDuplicatesArr = [];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (arr.indexOf(element, index + 1) == -1) {
        noDuplicatesArr.push(element);
    }

} 
console.log(noDuplicatesArr);

// flatten array

const arrTwo = [1, 2, [3, 4, [5, 6]]];
let flattenedArr = arrTwo.flat(2);
console.log(flattenedArr);

// find most commonly occurring number

const arrThree = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];
let longestSeries = 0;
let currentSeries = 0;
let repeatingNum

for (let index = 0; index < arrThree.length; index++) {
    const element = arrThree[index];
    if (arrThree.includes(element, index + 1)) {
        currentSeries++;
    } else if (currentSeries > longestSeries) {
        
    }
}