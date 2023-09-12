let input = [
    '1,2,20',
    '0'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const valByTen = (array, index) => {
    if (index === array.length - 1) {
        return false;
    }

    if (array[index + 1] === array[index] * 10) {
        return true;
    } else {
        return valByTen(array, index + 1);
    }
}

const arr = gets().split(',').map(Number);
const i = Number(gets());

print(valByTen(arr, i));