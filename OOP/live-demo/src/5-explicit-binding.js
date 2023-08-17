function logBrand(message, year) {
  console.log(`${message} ${this.brand}, year: ${year}`);
}

logBrand();

const myFirstPhone = {
  brand: 'Nokia'
}

const myFirstPC = {
  brand: 'Pravets'
}

// call - arguments listed with comma 
logBrand.call(myFirstPhone, 'That phone was', '1989');

// apply - arguments listed in array
logBrand.apply(myFirstPC, ['That PC was', '1989']);

// bind - return function
const boundFn = logBrand.bind(myFirstPhone);


// some time later 
boundFn('Message', '2000');
