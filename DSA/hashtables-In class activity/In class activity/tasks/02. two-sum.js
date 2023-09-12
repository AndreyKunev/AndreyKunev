/**
 * Return the indices of the first two numbers that sum to a given number 
 * @param {number[]} numbers The number collection
 * @param {number} sum The target sum
 * @returns {number[]} The indices of the 
 */
const twoSum = (numbers, sum) => {
    // Solution 1 -  this one is like Return of the Sith - it's ok, but it's not great
    // const n = numbers.length;
    // const arr = [...numbers];

    // let right = numbers.length - 1;
    // let left = 0;

    // arr.sort((a, b) => a - b);
    // let found = false;
    // while (right > left) {
    //     const checkSum = arr[left] + arr[right];
    //     if (checkSum === sum) {
    //         found = true;
    //         break;
    //     } else if (checkSum > sum) {
    //         right--;
    //     } else {
    //         left++;
    //     }
    // }

    // let answer = [];

    // for (let i = 0; i < n; i++) {
    //     if (arr[left] === numbers[i]) {
    //         answer.push(i);
    //     } else if (arr[right] === numbers[i]) {
    //         answer.push(i);
    //     }

    // }

    // found ? answer : answer = [-1, -1];
    // return answer;

    // Solution 2 - this one is more like A New Hope


    const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const difference = sum - numbers[i];
        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        map.set(numbers[i], i);
        
    }
    
    return [-1, -1];
}

// Tests:
const testCases = [
    { test: [1, 2, 3], sum: 5, expected: [1, 2] },
    { test: [2, 0, 1, 3, 2], sum: 4, expected: [2, 3] },
    { test: [2, 0, 1, 4, 2], sum: 4, expected: [1, 3] },
    { test: [2, 0, 1, 5, 2], sum: 4, expected: [0, 4] },
    { test: [1, 2, 3], sum: 6, expected: [-1, -1] }
];

testCases.forEach(({ test, sum, expected }, index) => {
    // arrange & act
    const indices = twoSum(test, sum);

    // assert
    const message = expected.join(',') === indices.join(',')
        ? 'Pass.'
        : `Fail. Expected: ${expected.join(',')}. Actual: ${indices.join(',')}`

    console.log(`Test ${index + 1}: ${message}`);
});
