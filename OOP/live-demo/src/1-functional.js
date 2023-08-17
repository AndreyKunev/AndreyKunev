const phone1 = {
  brand: 'Nokia',
  model: '3310',
  callsMade: 0
}

const makeCall = (phone) => {
  return {
    ...phone,
    callsMade: phone.callsMade + 1
  }
}

console.log(phone1);

const updated = makeCall(phone1);

console.log(phone1);
console.log(updated);