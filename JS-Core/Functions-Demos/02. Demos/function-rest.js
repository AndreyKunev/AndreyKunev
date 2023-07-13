// Here are the rest parameters as function parameters
// Rest parameters are actually array
function constructArray(arr, ...rest) {
  // Here we expand the arr and the rest parameters and create a new arr from them
  const newArr = [...arr, ...rest];
  console.log(newArr);
}

const arr = [1, 2, 3];
constructArray(arr, 4, 5, 6);

