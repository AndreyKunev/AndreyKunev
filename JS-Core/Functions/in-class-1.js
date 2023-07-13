let forEach = function (array, fn) {
    for (let index = 0; index < array.length; index++) {
        array[index] = fn(array[index]);
        
    }
    return array;
}

let aSlightChange = function (element) {
    element += 2;
    return element;
}

let arr = [1, 2, 3];

console.log(forEach(arr, aSlightChange));