import { deepCompareObjects, formatObject } from './common/utils.js';

/**
 * Solves a valid math expression
 * @param {string} expression The expression to evaluate
 * @returns {object} The deep copy
 */
const solve = (expression) => {
  // your implementation:

  let num = '';

  for (let i = 0; i < expression.length; i++) {
    const el = expression[i];
    
    if (Number(el)) {
      num += el;
    } else {
      switch (el) {
        case '(':
          continue;
          
        case '+':
          return Number(num) + solve(expression.split('').slice(i + 1).join(''));
          
        case '-':
          return Number(num) - solve(expression.split('').slice(i + 1).join(''));
          
        case '*':
          return Number(num) * solve(expression.split('').slice(i + 1).join(''));
          
        case '/':
          return Number(num) / solve(expression.split('').slice(i + 1).join(''));
      }
    }
  }

  return Number(num);
};

// Tests:
const testCases = [
  {
    test: '45+(55)',
    expected: 100,
  },
  {
    test: '45+(24*(12+3))',
    expected: 405,
  },
  {
    test: '12*(35-(46*(5+15)))',
    expected: -10620,
  },
  {
    test: '15',
    expected: 15,
  },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = solve(test);

  // assert
  const result = deepCompareObjects(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatObject(expected)}. Actual: ${formatObject(
      actual
    )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
