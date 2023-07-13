let input = [
    '1 2 3 4 5 6 7'
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(' ').map(Number);

let remainderZero = [];
let remainderOne = [];
let remainderTwo = [];

for (let i = 0; i < arr.length; i++) {
const element = arr[i];
if (element % 3 == 0) {
    remainderZero.push(element);
} else if (element % 3 == 1) {
    remainderOne.push(element);
} else {
    remainderTwo.push(element);
}
}

print(`${remainderZero.join(' ')}
${remainderOne.join(' ')}
${remainderTwo.join(' ')}`);
