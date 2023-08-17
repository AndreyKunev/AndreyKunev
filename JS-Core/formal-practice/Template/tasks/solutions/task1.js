// Neighboring cells

/**
 * 
 * @param {Array<number[]>} data
 */
export default function (data /* a matrix */) {
  // your code starts here
  const changeRows = data.map((_, outerIndex) => {
    const changeCols = data[outerIndex].map((_, index) => {

        const coordCheck = (x, y) => {
            if (x < 0 || x > data.length - 1 || y < 0 || y > data[outerIndex].length - 1) {
                return 0;
            } else {
                return data[x][y];
            }
        }
        const topEl = coordCheck(outerIndex - 1, index);
        const bottomEl = coordCheck(outerIndex + 1, index);
        const leftEl = coordCheck(outerIndex, index - 1);
        const rightEl = coordCheck(outerIndex, index + 1);
        const newEl = (topEl + bottomEl) - (leftEl + rightEl);
        return newEl;
        // const sumTopAndBottom = (( data[outerIndex - 1][index] || 0 ) + ( data[outerIndex + 1][index] || 0 ));
        // const sumLeftAndRight = (( data[outerIndex][index - 1] || 0 ) + ( data[outerIndex][index + 1] || 0 ));
        // return sumTopAndBottom - sumLeftAndRight;
    });
    return changeCols;
});

return changeRows;
  // your code ends here
}
