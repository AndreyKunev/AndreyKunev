let input = [
    '1'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const map = new Map();

const fibonacci = (n) => {
    if (map.has(n)) {
        return map.get(n);
    }
    
    if (n <= 1) {
        return Number(n);
    }    

    map.set(n, fibonacci(n - 1) + fibonacci(n - 2));
    
    return map.get(n);
}


const n = gets();

print(fibonacci(n));