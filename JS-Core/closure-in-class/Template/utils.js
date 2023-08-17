export const byKey = (key, order) => {
  const orderNum = order === 'desc' ? -1 : 1;

    const newOrder = (a, b) => {
      if (a[key] < b[key]) {
        return (-orderNum);
      } else if (a[key] > b[key]) {
        return orderNum;
      } 

      return 0;
    }
    return newOrder;
};

export const findBy = (key, value) => {

  const inner = (element) => {
      return element[key] === value;
    }

    return inner;
}

export const isBetween = (key, low, high) => {

  // Closure. You return a new function which has closure over key, low and high
};

export const isLower = (key, value) => {

  // Closure. You return a new function which has closure over key and value
};

export const isHigher = (key, value) => {

  // Closure. You return a new function which has closure over key and value
};

export const startsWith = (key, letter) => {

  // Closure. You return a new function which has closure over key and letter
};
