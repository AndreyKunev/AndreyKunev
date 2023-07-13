const checkIfNumber = function (num) {
    if (typeof num !== 'number'){
        throw new Error(`${num} is not a number`);
    } else{
        console.log("All good.")
    }
}

const add = function (a, b) {
    a = checkIfNumber(a);
    b = checkIfNumber(b);
    return a + b;
    
}

const subtract = function (a, b) {
    if (typeof(a) !== "number") {
        throw new Error(`${a} is not a number`);
        
    } else if (typeof(b) !== "number") {
        throw new Error(`${b} is not a number`);
    } else {
        return a - b;
    }
}

const multiply = function (a, b) {
    if (typeof(a) !== "number") {
        throw new Error(`${a} is not a number`);
        
    } else if (typeof(b) !== "number") {
        throw new Error(`${b} is not a number`);
    } else {
        return a * b;
    }
}

const divide = function (a, b) {
    if (typeof(a) !== "number") {
        throw new Error(`${a} is not a number`);
        
    } else if (typeof(b) !== "number") {
        throw new Error(`${b} is not a number`);
    } else {
        return a / b;
    }
}


console.log(add(2, 'wow'));


// try {
//     add('Telerik', 1, 2);
//     } catch (error) {
//     console.log(error.message);
//     }