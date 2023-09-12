let input = [
    '2'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const triangle = (n) => {
    if (n <= 1) {
        return n;
    }

    return Number(n) + Number(triangle(n - 1));
}

const n = gets();

print(triangle(n));