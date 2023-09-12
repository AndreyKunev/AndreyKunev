let input = [
    '5'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const num = Number(gets());
print(factorial(num));
