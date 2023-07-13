export const removeFirst = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  } else {
    const newArr = arr.slice(1);
    return newArr;
  }
  
}

export const removeLast = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  } else {
    const newArr = arr.slice(0, arr.length - 1);
    return newArr;
  }
};

export const addFirst = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  } else {
    const newArr = [element, ...arr];
    return newArr;
  }
};

export const addLast = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  } else {
    const newArr =  [...arr, element];
    return newArr;
  }
};

export const contains = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  } else {
    const newArr = arr.includes(element);
    return newArr;
  }
};
