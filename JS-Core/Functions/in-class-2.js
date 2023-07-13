let filter = function (array, checkFn) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        
        let check = checkFn(array[index]);
        if (check === true) {
            newArr.push(array[index]);
        }
    }
    return newArr;
}

let divisibleByThree = function (element) {
    if (element % 3 === 0 && element % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

let sequence = [3, 6, 9, 15, 18, 21, 33];
console.log(filter(sequence, divisibleByThree));