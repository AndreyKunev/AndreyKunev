let input = [
    '1,2,11',
    '0'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const hasEleven = (array, index) => {
    if (index === array.length) {
        return 0;
    }

    if (array[index] === '11') {

        return 1 + hasEleven(array, index + 1);
    } else {
        return hasEleven(array, index + 1);
    }
}

const arr = gets().split(',')
const i = Number(gets());

print(hasEleven(arr, i));