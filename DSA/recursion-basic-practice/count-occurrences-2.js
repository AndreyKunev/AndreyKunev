let input = [
    '8818'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const countOccurrencesTwo = (n) => {
    if (n / 10 === 0) {
        return 0;
    }

    const lastDigit = n % 10;
    const doublesCheck = n % 100;
    const rest = Math.floor(n / 10);

    if (doublesCheck === 88) {
        return 2 + countOccurrencesTwo(rest);
    } else if (lastDigit === 8) {
        return 1 + countOccurrencesTwo(rest);
    } else {
        return countOccurrencesTwo(rest);
    }
}

const n = Number(gets());
print(countOccurrencesTwo(n));