let input = [
    '3',
    '2'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const powerN = (base, power) => {
    if (power < 1) {
        return 1;
    }

    return base * powerN(base, power - 1);
}

const base = Number(gets());
const power = Number(gets());
print(powerN(base, power));