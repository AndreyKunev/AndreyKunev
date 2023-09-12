let input = [
    '9001'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const sumDigits = (n) => {
    if (Math.floor(n) / 10 === 0) {
        return Math.floor(n);
    }

    const lastDigit = n % 10;
    const rest = Math.floor(n / 10);
    return lastDigit + sumDigits(rest);
}

const n = Number(gets());

print(sumDigits(n));