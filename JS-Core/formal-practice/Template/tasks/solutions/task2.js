// Special mapping function

/**
 * 
 * @param {(param: any) => 1 | 2 | 3} data 
 */
export default function (data /* a function - data: (param: any) => 1 | 2 | 3 */) {
  // your code starts here
  const inner = (arr) => {
    const mapData = arr.map(el => {
      if (data(el) === 1) {
        return el + 1;
      } else if (data(el) === 2) {
        return { name: el };
      } else {
        const newArr = el.map(el => el * el);
        return newArr;
      }
    })
    return mapData;
  }
  return inner;
  // your code ends here
}
