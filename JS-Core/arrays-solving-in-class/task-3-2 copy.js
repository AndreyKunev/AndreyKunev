const n = 5;
const arr = [];


// initialize each row as an empty array of 4 elements

for (let row = 0; row < n; row++) {
  arr[row] = Array.from({ length: n });
}

for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    if (col % 2 === 0) {
      arr[row][col] = (row + 1) + (col * n);
    } else {
      arr[row][col] = (n - row) + (col * n) ; // 1 * 4 - 3 + 1
    }
  }
}

console.log(arr);
