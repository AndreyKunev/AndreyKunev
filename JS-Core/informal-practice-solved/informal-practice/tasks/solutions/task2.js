// Function spy
export default function (data /* always a function */) {
// your code starts here
let cache = {};


return (param) => {
    if (!(param in cache)) {
        const result = data(param);
        cache[param] = { value: result, calls: 1 };
    } else {
        cache[param].calls++;
    }
    return cache[param];
};
// your code ends here
}