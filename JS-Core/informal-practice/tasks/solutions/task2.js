// Function spy
export default function (data /* always a function */) {
// your code starts here
let cache = {};


return (param) => {
    const paramKey = String(param); 
    if (!(paramKey in cache)) {
        const result = data(param);
        cache[paramKey] = { value: result, calls: 1 };
    } else {
        cache[paramKey].calls++;
    }
    return { ...cache[paramKey] };
};
// your code ends here
}