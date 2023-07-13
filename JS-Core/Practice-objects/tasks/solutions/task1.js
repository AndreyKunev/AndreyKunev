// Clone Objects

export default function (data) {
  // your code starts here
  const newObj = {};
  for (const key in data) {
    const property = data[key];
    if (Array.isArray(property)) {
        const arrCopy = [...property];
        newObj[key] = arrCopy;
    } else if (!Array.isArray(property) && property instanceof Object) {
        newObj[key] = {...property};
    } else {
        newObj[key] = property;
    }
  }

  return newObj;

  // your code ends here
}
