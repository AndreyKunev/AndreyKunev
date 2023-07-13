// let input = [
//     "4",
//     "10,20,30,40,50",
//     "2 forward 1",
//     "2 backwards 1",
//     "3 forward 2",
//     "3 backwards 2",
//     "exit"
// ]

// let input = [
//     "0",
//     "10,20",
//     "1 forward 1",
//     "2 backwards 1",
//     "1 forward 1",
//     "exit"
// ]
let input = [
    "0",
    "10,20,30,40,50",
    "2 forward 1",
    "2 backwards 1",
    "3 forward 200",
    "3 backwards 2",
    "3 backwards 2",
    "3 backwards 2",
    "3 backwards 100",
    "exit"
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let moveForward = function (step, start, array) {
//     let indexAfterStep = start;
    
//     if (start + step  > array.length - 1) { // does the step place us at an index with an undefined value?
//         indexAfterStep = start + step - array.length;
//     } else {
//         indexAfterStep = start + step;
//     }
//     return indexAfterStep;
// }

// let moveBackwards = function (step, start, array) {
//     let indexAfterStep = start;
//     if (start - step  < 0) { // does the step place us at an index with an undefined value?
//         indexAfterStep = start - step + array.length;
//     } else {
//         indexAfterStep = start - step;
//     }
//     return indexAfterStep;
// }

let position = Number(gets());
let arr = gets().split(',').map(Number);


let forward = 0;
let backwards = 0;

while (true) {
    let instructions = gets();
    if (instructions == 'exit') {
        break;
    } else {
        instructions = instructions.split(' ');
        let steps = Number(instructions[0]);
        let stepSize = Number(instructions[2]);
        let direction = instructions[1];
        while (steps > 0) {
            if (direction == 'forward') {
                if (position + stepSize > arr.length - 1) {
                    position = (position + stepSize) % arr.length;
                } else {
                    position += stepSize;
                }
                forward += arr[position];
                steps--;
            } else if (direction == 'backwards') {
                if (position - stepSize < 0) {
                    position = ((position - stepSize) % arr.length + arr.length) % arr.length;
                } else {
                    position -= stepSize;
                }
                backwards += arr[position];
                steps--;
            }
        }
    }
}

console.log(`Forward: ${forward}`);
console.log(`Backwards: ${backwards}`);