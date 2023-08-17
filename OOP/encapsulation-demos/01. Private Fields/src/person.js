export class Person {
  // Field is private an unaccessible from the outside this class.
  // One way to read or write to it is though class methods (behavior).
  #name;

  constructor(name) {    
    // When changing the state, use the 'setter' method if there is one available.
    // That way you can reuse the validations inside which are for this specific state (in this case, name)
    this.setName(name);
  }

  getName() {
    // Though a 'getter' method, you can control how to expose the value of this field.
    // If this were a reference value (like an array for example), it would be a good idea to return a copy.
    return this.#name;
  }

  setName(value) {
    // Though a 'setter' method you can change the state in a controlled way.
    // Setters methods allow you to write validations for that specific state.
    if (!value || value.length < 2 || value.length > 20) {
      throw new Error('Invalid person name!');
    }

    this.#name = value;
  }

  sayIntroduction() {
    // be careful when interacting with 'getter' methods, as could be modifying the value stored in the field.
    // For example, the getter might return a copy, which could sometimes make your method behave in unexpected ways. 
    console.log(`Hello, my name is ${this.getName()}`);
  }
}