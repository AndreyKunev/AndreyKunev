let filter = function (array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (element > 10) {
            newArr.push(element);
        }
    }
    return newArr;
}

let map = function (array) {

    function getRandomInt(min = 0, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    let num = getRandomInt(undefined, array.length) // just length as max is exclusive
    array[num] += 10;
    return array;
}
let write = function (array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}

const arr = [1, 2, 3];

write((filter(map(arr))));