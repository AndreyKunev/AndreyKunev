let input = [
    'xxhixx'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const countHi = (string) => {
    if (string.length < 2) {
        return 0;
    }

    const lastTwo = string[string.length - 2] + string[string.length - 1];
    if (lastTwo === 'hi') {
        const rest = string.slice(0, string.length - 2);
        return 1 + countHi(rest);
    } else {
        const rest = string.slice(0, string.length - 1);
        return countHi(rest);
    }
}

const n = gets();
print(countHi(n));