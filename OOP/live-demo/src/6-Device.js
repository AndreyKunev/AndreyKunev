export class Device {
  static devicesCount = 0;
  // state
  brand;
  model;
  callsMade = 0;

  battery = 100;

  static fromJSON(jsonStr){
    const parsed = JSON.parse(jsonStr);

    return new Device(parsed.brand, parsed.model);
  }

  static getDevicesCount() {
    return Device.devicesCount;
  }

  constructor(initialBrand, initialModel) {
    //validation
    //initialization

    this.validateModel(initialModel);
    this.model = initialModel;

    this.setBrand(initialBrand);

    // no this - static field
    Device.devicesCount++;
  }

  makeCall() {
    this.callsMade++;
    if (this.callsMade % 5 === 0){
      this.battery--;
    }
  }

  setBrand(brand) {
    this.validateBrand(brand);
    this.brand = brand;
  }

  validateBrand(brand) {
    if (!brand || typeof brand !== 'string') {
      throw new Error(`Invalid brand ${brand}`);
    }
  }

  validateModel(model) {
    if (!model || typeof model !== 'string' || model.length < 2 || model.length > 10) {
      throw new Error(`Invalid model ${model}`);
    }
  }

  toString() {
    return `This is ${this.brand} ${this.model} and it has ${this.battery}% battery left`;
  }

}