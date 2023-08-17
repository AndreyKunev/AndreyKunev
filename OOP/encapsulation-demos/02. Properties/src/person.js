export class Person {
  // Field is private an unaccessible from the outside this class.
  // Other than class methods, you can use properties, they are made for this!
  #name;

  constructor(name) {    
    // ! Note that this code calls the setter `name`, not the private field `#name`!
    // When changing the state, use the setter if there is one available.
    this.name = name;
  }

  get name() {    
    // Though a get property, you can control how to expose the value of this field.
    // ! Be careful not to confuse the getter `name` with private field `#name`!
    // This will create an infinite recursion. Give it a try! :)
    return this.#name;
  }

  set name(value) {
    // Though a set property, you can change the state in a controlled way.
    // Setters methods allow you to write validations for that specific state
    if (!value || value.length < 2 || value.length > 20) {
      throw new Error('Invalid person name!');
    }

    this.#name = value;
  }

  sayIntroduction() {
    // ! Be careful when interacting with 'getter' methods, as could be modifying the value stored in the field.
    // For example, the getter might return a copy, which could sometimes make your method behave in unexpected ways. 
    console.log(`Hello, my name is ${this.name}`);
  }
}