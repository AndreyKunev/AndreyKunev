let input = [
    '2'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const countEarsTwo = (bunnies) => {
    if (bunnies < 1) {
        return 0;
    }
    let bunnyEars = bunnies % 2 === 0 ? 3 : 2;

    return bunnyEars + countEarsTwo(bunnies - 1);
}

const n = Number(gets());

print(countEarsTwo(n))