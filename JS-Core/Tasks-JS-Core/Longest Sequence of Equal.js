let input = [
    '10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let numArr = [];

for (let index = 0; index < n; index++) {
    let element = Number(gets());
    numArr.push(element);
}


let longest = 1;
let current = 1;
for (let index = 0; index < n; index++) {
    const element = numArr[index];
    const nextElement = numArr[index + 1];
    if (element === nextElement) {
        current++; // add to current
    } else if (current > longest) {
        longest = current; // set new longest 
        current = 1;
    } else {
        current = 1; // reset current if not longer than longest
    }
}

console.log(longest);