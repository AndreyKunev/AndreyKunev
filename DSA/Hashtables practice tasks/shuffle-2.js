let input = [
    '7 4',
    '1 5 4 7'
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const nAndK = gets().split(' ');

const n = nAndK[0];
const k = nAndK[1];

const toShuffle = gets().split(' ');
const initialArr = [];
const nMap = new Map();

for (let i = 1; i <= n; i++) {
    nMap.set(i, i);
}

for (let i = 0; i < toShuffle.length; i++) {
    const num = toShuffle[i];
    if (num % 2 !== 0) {
        
    }
    
}

print(nMap);