import { compareMaps, stringifyMap } from "./common/map-utils.js";

/**
 * Counts the number of occurrences of a each word in a collection 
 * @param {string[]} words A collection of words
 * @returns {Map<string, number>} Map of occurrences by word 
 */
const countOccurrences = (words) => {
    // your implementaion
    const wordMap = new Map();

    for (const word of words) {
        const count = wordMap.get(word) || 0;
        wordMap.set(word, count + 1);
    }

    return wordMap;
};

// Tests:
const testCases = [
    {
        test: ['gosho', 'pesho', 'gosho'],
        expected: new Map([['gosho', 2], ['pesho', 1]])
    },
    {
        test: ['js', 'is', 'awesome'],
        expected: new Map([['js', 1], ['is', 1], ['awesome', 1]])
    },
    {
        test: ['must', 'learn', 'promises', '...', 'must', 'learn', 'promises', '!'],
        expected: new Map([['must', 2], ['learn', 2], ['promises', 2], ['...', 1], ['!', 1]])
    }
];

testCases.forEach(({ test, expected }, index) => {
    // arrange & act
    const occurrences = countOccurrences(test);

    // assert
    const result = compareMaps(expected, occurrences);
    const message = result
        ? 'Pass.'
        : `Fail. Expected: ${stringifyMap(expected)}. Actual: ${stringifyMap(occurrences)}`

    console.log(`Test ${index + 1}: ${message}`);
});
