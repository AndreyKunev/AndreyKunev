import { UniqueList } from './unique-list.js';

const uniqueList = new UniqueList();
uniqueList.add(1);
uniqueList.add(1);
uniqueList.add(2);
uniqueList.add(3);
console.log(uniqueList.has(1));
console.log(uniqueList.has(2));
console.log(uniqueList.has(3));
console.log(uniqueList.has(4));

const elements = uniqueList.getElements();
console.log(elements);