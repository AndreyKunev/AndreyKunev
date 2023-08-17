import { Device } from "./6-Device.js";

const phone1 = new Device('Nokia', '3310');
//phone1.setBrand = 'test';

const phone2 = new Device('SAMSUNG', 's10');

console.log(phone1.toString());
// console.log(phone2);

for (let index = 0; index < 34; index++) {
  phone1.makeCall();
}

console.log(phone1.toString());

const phone3 = Device.fromJSON('{"brand": "iPhone", "model": "6S"}')
console.log(phone3.toString());

console.log(Device.getDevicesCount());


// function bla(param){
//   console.log(`Bla ${param}`);
// }

// bla();
// bla('NADYA');
// bla('bla', 10);


const toStringFn = phone1.toString.bind(phone3);

console.log(toStringFn());