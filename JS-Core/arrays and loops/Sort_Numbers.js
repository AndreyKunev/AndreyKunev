let input = [
    '4, 2, 3, 1, 5, 6, 10, 18, 54'
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


//print(arr.sort((a, b) => a - b).reverse());
  
let series = gets().split(',').map(Number);

for (let i = 0; i < series.length; i++) {
  for (let y = series.length - 1; y > i; y--) {
    if (series[i] < series[y]) {
      let x = series[i];
      series[i] = series[y];
      series[y] = x;
    }
  }
}

let string = series.join(', ');
print(string);