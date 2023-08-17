const phone = {
  brand: 'Nokia',
  getInfo(){
    return `This phone's brand is ${this.brand}`
  }
}

console.log(phone.getInfo());

const infoFn = phone.getInfo;

console.log(infoFn());
console.log(infoFn);