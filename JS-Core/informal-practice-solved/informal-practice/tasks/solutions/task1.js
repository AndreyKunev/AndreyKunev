// Reduced matrix transposition
export default function (data) {
  // your code starts here 
    const changedElements = data.map((_, index) => {
      const rowSum = data[index].reduce((acc, el) => acc + el, 0);
      const changedRow = data[index].map(innerEl => innerEl / rowSum);
      return changedRow;
  });
  const transformed = [];
  data[0].map((_, index) => {
      const newRow = changedElements.map((_, indexInner) => changedElements[indexInner][index]);
      transformed.push(newRow);
  });

  return transformed;
  // your code ends here
}
