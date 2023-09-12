let input = [
    '1,6,4',
    '0'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const hasSix = (array, index) => {
    if (index === array.length) {
        return false;
    }

    if (array[index] === '6') {
        return true;
    } else {
        return hasSix(array, index + 1);
    }
}

const arr = gets().split(',')
const i = Number(gets());

print(hasSix(arr, i));