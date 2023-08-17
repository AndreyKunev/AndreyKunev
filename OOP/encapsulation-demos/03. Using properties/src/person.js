export class Person {
  // Field is private an unaccessible from the outside this class.
  // Other than class methods, you can use properties, they are made for this!
  #firstName;
  #lastName;
  #EGN;

  constructor(firstName, lastName, EGN) {    
    // ! Note that this code calls the setter `name`, not the private field `#name`!
    this.firstName = firstName;
    this.lastName = lastName;

    // Readonly properties can be validated in the constructor, because they don't have a setter.
    if (!EGN) {
      throw new Error('Invalid person EGN!');
    }
    this.#EGN = EGN;
  }

  // firstName properties
  get firstName() {    
    return this.#firstName;
  }

  set firstName(value) {
    if (!value || value.length < 2 || value.length > 20) {
      throw new Error('Invalid person first name!');
    }

    this.#firstName = value;
  }

  // lastName properties
  get lastName() {    
    return this.#lastName;
  }

  set lastName(value) {
    if (!value || value.length < 2 || value.length > 20) {
      throw new Error('Invalid person last name!');
    }

    this.#lastName = value;
  }

  // other properties
  get fullName() {
    // Properties do not need to be directly tied to fields
    // They can also aggregate data
    return this.firstName + ' ' + this.lastName;
  }

  get EGN() {
    // This property is read-only - it does not have a setter.
    return this.#EGN;
  }

  sayIntroduction() {
    // ! Be careful when interacting with 'getter' methods, as could be modifying the value stored in the field.
    // For example, the getter might return a copy, which could sometimes make your method behave in unexpected ways. 
    console.log(`Hello, my name is ${this.fullName}, my EGN is ${this.EGN}`);
  }
}