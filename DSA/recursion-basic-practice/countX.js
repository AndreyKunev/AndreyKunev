let input = [
    'xxhixx'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const countX = (string) => {
    if (string.length === 0) {
        return 0;
    }

    const last = string.length - 1;
    const rest = string.slice(0, last);
    if (string[last] === 'x') {
        return 1 + countX(rest);
    }
    
    return countX(rest);
}

const str = gets();

print(countX(str));