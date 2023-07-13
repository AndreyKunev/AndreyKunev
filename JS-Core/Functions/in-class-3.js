let map = function (array, modifyFn) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        let element = modifyFn(array[index]);
        newArr.push(element);
    }
    return newArr;
}

let addSeven = function (item) {
    return item + 7;
}

//let addFive = (item) => item + 5;

let sequence = [5, 7, 1, 3, 18, 15, 35];

console.log(map(sequence, addSeven));
//console.log(map(sequence, addFive));