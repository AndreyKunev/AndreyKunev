let input = [
    '717'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const countOccurrences = (n) => {
    if (n / 10 === 0) {
        return 0;
    }

    const lastDigit = n % 10;
    const rest = Math.floor(n / 10);
    if (lastDigit === 7) {
        return 1 + countOccurrences(rest);
    } else {
        return countOccurrences(rest);
    }
}

const n = Number(gets());
print(countOccurrences(n));

