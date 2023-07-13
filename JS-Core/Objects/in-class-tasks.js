const getKeys = (obj) => {
    let keyArr = Object.keys(obj);
    // ANOTHER SOLUTION:
    // let keyArr = [];
    // for (const key in obj) {
    //         keyArr.push(key);
    //     }
    return keyArr;
}

const deleteKey = (obj, key) => {
    const newObj = { ...obj }; // create copy
    delete newObj[key]; // delete passed property by key
    return newObj; 
}

const deleteKeys = (obj, keys) => {
    const newObj = { ...obj };
    for (const key of keys) {
        delete newObj[key];
    }
    return newObj;
}   

const getTypeStats = (obj) => {
    const newObj = {};
    let strings = 0;
    let numbers = 0;
    let bool = 0;
    let arrays = 0;
    let objects = 0;
    let nulls = 0;
    let numOfUndefined = 0;
    let bigInts = 0;
    let symbols = 0;
    for (const key in obj) {
        if (typeof(obj[key]) === 'string') {
            strings++;
            newObj.strings = strings;
        } else if (typeof(obj[key]) === 'number') {
            numbers++;
            newObj.numbers = numbers;
        } else if (typeof(obj[key]) === 'boolean') {
            bool++;
            newObj.booleans = bool;
        } else if (typeof(obj[key]) === 'BigInt') {
            bigInts++;
            newObj.bigInts = bigInts;
        } else if (obj[key] === null) {
            nulls++;
            newObj.nulls = nulls;
        } else if (obj[key] === undefined) {
            numOfUndefined++;
            newObj.numberOfUndefined = numOfUndefined;
        } else if (typeof(obj[key]) === 'symbol') {
            symbols++;
            newObj.symbols = symbols;
        } else if (Array.isArray(obj[key])) {
            arrays++;
            newObj.arrays = arrays;
        } else if (typeof obj[key] === 'object' 
                    && !Array.isArray(obj[key]) 
                    && obj[key] !== null) {
            objects++;
            newObj.objects = objects;
        }
    }
    return newObj;
}

const parseUrl = (url) => {
    const newObj = {};

    let temp = url.split('://');
    protocol = temp.shift();
    newObj.protocol = protocol;
    temp = temp.join();
    const host = temp.substring(0, temp.indexOf('/'));
    newObj.host = host;
    const path = temp.substring(temp.indexOf('/'), temp.indexOf('?'));
    newObj.path = path;
    const query = {};
    
    let queryCheck = temp.substring(temp.indexOf('?') + 1);
    let qKey = null;
    let qValue = null;

    while (queryCheck.length > 0) {
        if (queryCheck.includes('&')) {
            qKey = queryCheck.substring(0, queryCheck.indexOf('='));
            qValue = queryCheck.substring(queryCheck.indexOf('=') + 1, queryCheck.indexOf('&'));
            query[`${qKey}`] = qValue;
            queryCheck = queryCheck.substring(queryCheck.indexOf('&') + 1);
        } else {
            qKey = queryCheck.substring(0, queryCheck.indexOf('='));
            qValue = queryCheck.substring(queryCheck.indexOf('=') + 1);
            query[`${qKey}`] = qValue;
            queryCheck = '';
        }
    }

    newObj.query = query;
    return newObj
}

const jobOffer = { 
    title: 'Looking for devops guru', 
    description: 'Our growing startup of 27400 emplo...',
    date: '21/12/2112' 
};

let person = {
    firstName: 'Steven',
    lastName: 'Queen',
    age: 60,
    address: {
        street: '12 Port str',
        city: 'Portland'
    },
    interests: [ 'writing', 'drinking' ]
}

let parsed1 = parseUrl('https://learn.telerikacademy.com/course/view.php?id=36');
console.log(parsed1);
let parsed2 = parseUrl('https://google.com/search?q=cats&region=eu');
console.log(parsed2)

