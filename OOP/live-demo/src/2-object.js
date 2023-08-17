const phone1 = {
  brand: 'Nokia',
  model: '3310',
  callsMade: 0,
  // method
  makeCall() {
    //  some complicated code
    this.callsMade ++;
  }
}

console.log(phone1);

phone1.makeCall();

console.log(phone1);

const phone2 = {
  brand: 'Samsung',
  model: 'S10',
  callsMade: 0,
  makeCall: phone1.makeCall
}

phone1.callsMade = 'banicha';

phone2.makeCall();

console.log(phone1);
console.log(phone2);

