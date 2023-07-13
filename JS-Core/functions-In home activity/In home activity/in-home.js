const checkIfNumber = function (number) {
    if (typeof number !== 'number'){
        throw new Error(`${number} is not a number`);
    } else{
        console.log("All good.")
    }
}

const addTwoNumbers = function (num1, num2, ...numbers){
    checkIfNumber(num1);
    checkIfNumber(num2);
    let result = num1 + num2;
    for (const num of numbers){
        result = result + num;
    }
    return result;
}

const substractTwoNumbers = function (num1, num2){
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 - num2;
}

const multiplyTwoNumbers = function (num1, num2){
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 * num2;
}

const divideTwoNumbers = function (num1, num2){
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 / num2;
}

const calculator = function (num1, num2, ...functions){
    let result = [];
    for (const fn of functions){
        result.push(fn(num1, num2));
    }
    return result;
}

// try{
//     console.log(addTwoNumbers(10,20,30,40,50));
// }catch(error){
//     console.log(error.message);
// }


console.log(calculator(20,30, substractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers));