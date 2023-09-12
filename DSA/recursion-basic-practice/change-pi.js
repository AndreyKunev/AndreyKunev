let input = [
    'xxpixx'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const changeToPi = (string) => {
    if (string.length < 2) {
        return string;
    }

    const lastTwo = string[string.length - 2] + string[string.length - 1];
    if (lastTwo === 'pi') {
        const rest = string.slice(0, string.length - 2);
        return changeToPi(rest) + '3.14';
    } else {
        const rest = string.slice(0, string.length - 1);
        const last = string[string.length - 1];
        return changeToPi(rest) + last;
    }
}

const n = gets();
print(changeToPi(n));