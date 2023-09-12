let input = [
    '5'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies 
// recursively (without loops or multiplication).

const countEars = (bunnies) => {
    if (bunnies < 1) {
        return 0;
    }

    return 2 + countEars(bunnies - 1);
}

const n = Number(gets());

print(countEars(n));
