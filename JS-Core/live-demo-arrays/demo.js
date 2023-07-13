// JavaScript
// dynamically typed - 
// cross platform
// high level
// rich eco system
// multi-paradigm  (functional + OOP)
// interpreted and compiled
// single-threaded



// dynamically typed
let number = 5;
console.log(number);
console.log(typeof number);
number = 'Nadya';
console.log(number);
console.log(typeof number);

// true / false
console.log(Number(3.5));
console.log(BigInt(3n));

console.log(Number.MAX_SAFE_INTEGER);

.5;
1_000_000;

console.log(.1 + .2);





// coercion
console.log(2 + 2); // 4
console.log(2 + '2'); // 22
console.log(4 - '2'); // 2
console.log(4 - 'APPLE'); // NaN
console.log(1 / 0);
console.log(1 / null);
console.log(1 / undefined);
console.log(Number.isNaN(1 / 0));
console.log(Number.isNaN(NaN));

// Truthy & falsy
console.log('1' == true);

// '' == false == 0 == NaN == undefined == [] == -0);


// == vs. ===
console.log(-0 == false);
console.log(Boolean('dfdrf'));
console.log(-0 === false); // coercion
console.log('5' != 5); // coercion -> value if not -> !value
console.log('5' !== 5); // -> value && type if not -> !(value && type) = !value || !type
let x = 90;

if (number || x) { }
if (number && x) { }

// true && false && true = false
// false || false || true = true

// true && false -> !(true && false) = false || true

const e1 = 1 + 2;
const e2 = 1 + 2 + 3;

// expression - piece of code that is calculated and evaluated to produce value
// statement - piece of code that expresses an action to be executed

// JS program = declarations + statements
1 + 2;

const result = e1 - e2;
const num = +'23';
console.log(typeof num);

// Template literals (Template strings) - `string text ${expression} string text`
console.log(`The result of the question is '5' equal to 5 is ${'5' === 5}`);

function divide(num, denom) {
  if (!denom) {
    console.log(`${denom} is not correct value for denominator!`);
    console.log("Finish!");
  }
  else {
    console.log(`The result is ${num / denom}`);
  }
}

// {
//   console.log(`${denom} is not correct value for denominator!`);
// }

divide(20, 5);
divide(20, 0);




// block statement;

// Template literals (Template strings) - `string text ${expression} string text`

// templates

// if (/* value or expression */) /* exactly 1 statement */
// expression: 1 + 2; 3 > 2; Math.min(1, 2); 2 ** 3; console.log(true);
// statement: block; if; if-else; for; for-in; declaration;

// if (/* value or expression */) /* exactly 1 statement */
// else /* exactly 1 statement */

// while (/* value or expression */) /* optional statement */



// for (/* optional expression statement */; /* optional expression statement */; /* optional expression statement */) /* optional statement */
// for(;;);

// if([].length > 0) {console.log(1);}


// for-in - enumerable, arbitrary order; use to get props of object
const numbers = [11, 22, 33];
numbers.name = 'Pesho';

for (let number in numbers) {
  console.log(number);
}

for (let index in numbers) {
  console.log(numbers[index]);
}


// for-of  - iterable, keeps the order, use arrays & strings
for (let number of numbers) {
  console.log(number);
}


// const nums = [1, 2, 3, 4];

// for (let x of nums) {
//   console.log(nums[x]); // nums[1]
// }


// Arrays - how do we create them

const arr = [12, 3, 4, 4, undefined, NaN, divide, { name: 'Nadya', age: '100', "0": 12 }]; // array literal
for (let elem of arr) {
  console.log(typeof elem);
}

// Array.of()

const arr1 = Array.of(1, 1, 1, 1, 1);

// Array.from()
const chars = Array.from('Pesho');
console.log(chars);

const myArr = Array.from({ length: 10 });
console.log(myArr);

myArr[20] = 90;
console.log(myArr.length);
//console.log(myArr);

myArr[-20] = 90;
myArr['Nadya'] = 90;
console.log(myArr.length);
//console.log(myArr);

for (let elem of myArr) {
  console.log(elem);
}

for (let elem in myArr) {
  console.log(elem);
}

