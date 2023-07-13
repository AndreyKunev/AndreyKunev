let input = [
    'asa',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let returnArrayBlocks = function (array) {
    let arr = [];
    let row = 0; 
    let rowSizeCheck = true;
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        const prevElement = array[index - 1];
        if (element.charCodeAt() === prevElement.charCodeAt() && rowSizeCheck) {
            arr.push([prevElement, element]);
            rowSizeCheck = false;
        } else if (element.charCodeAt() === prevElement.charCodeAt()) {
            arr[row].push(element);
        } else if (Array.isArray(arr[row])) {
            row++;
            rowSizeCheck = true;
        }
        
    }
    
    return arr;
}

let longestBlock = function (array) {
    let longest = array[0];
    for (let index = 1; index < array.length; index++) {
        const block = array[index];
        if (block.length > longest.length) {
            longest = block;
        }
    }
    return longest;
}

let charSequence = gets().split('');

let answer = longestBlock(returnArrayBlocks(charSequence));
if (typeof(answer) === 'undefined') {
    console.log(charSequence[0]);
} else {
    console.log(answer.join(''));
}