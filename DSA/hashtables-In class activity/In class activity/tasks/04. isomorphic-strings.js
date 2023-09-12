
/**
 * Determines if s1 an s2 are isomorphic.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} true if isomorphic 
 */
const areIsomorphic = (s1, s2) => {
    // we need two maps to compare
    const firstMap = new Map();
    const secondMap = new Map();

    for (let i = 0; i < s1.length; i++) {
        // if we try to map more than one character to another character, return false
        // we use the index as a value in the key value pair to determine if we've mapped a character before
        if(firstMap.get(s1[i]) !== secondMap.get(s2[i])) { 
            return false;
        }
        
        firstMap.set(s1[i], i);
        secondMap.set(s2[i], i);
    }

    return true;
}
// Tests:
const testCases = [
    { s1: 'egg', s2: 'add', expected: true },
    { s1: 'aab', s2: 'xyz', expected: false },
    { s1: 'paper', s2: 'title', expected: true },
    { s1: 'tidal', s2: 'paper', expected: false },
    { s1: 'JavaScript', s2: 'Java', expected: false },
    { s1: 'listen', s2: 'silent', expected: true },
    { s1: 'theeyes', s2: 'theysee', expected: false },
];

testCases.forEach(({ s1, s2, expected }, index) => {
    // arrange & act
    const result = areIsomorphic(s1, s2);

    // assert
    const message = result === expected
        ? 'Pass.'
        : `Fail. Expected: ${expected}. Actual: ${result}`

    console.log(`Test ${index + 1}: ${message}`);
});
