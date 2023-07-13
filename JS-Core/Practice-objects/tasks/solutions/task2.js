// Game of Key-owns

/**
 * 
 * @param {{ keys: string[], first: object, second: object }} data 
 */
export default function (data) {
  // your code starts here
  const newObj = {};
  for (const keyName of data.keys) {

    newObj[keyName] = null;

    if (typeof(data.first[keyName]) !== 'undefined' && typeof(data.second[keyName]) !== 'undefined') {
        newObj[keyName] = [data.first[keyName], data.second[keyName]];
    } 
    else if (typeof(data.first[keyName]) !== 'undefined') {
        newObj[keyName] = data.first[keyName];
    } 
    else if (typeof(data.second[keyName]) !== 'undefined') {
        newObj[keyName] = data.second[keyName];
    }  
}

return newObj;
  // your code ends here
}
