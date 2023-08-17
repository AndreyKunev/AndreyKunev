// Usable properties
export default function (data) {
  // your code starts here

  const filteredData = data.map(obj => {
    const newObj = {};
    obj.usable.filter(el => obj.hasOwnProperty(el) ? newObj[el] = obj[el] : false);
    return newObj;
  });

  return filteredData;
  // your code ends here
}
