// ! This is an example how you'd document this class.

/** Represents a real-life person. */
export class Person {
  // Field is private an unaccessible from the outside this class.
  // Other than class methods, you can use properties, they are made for this!
  #firstName;
  #lastName;
  #EGN;

  /**
   * @param {string} firstName - First name of the person.
   * @param {string} lastName - Last name of the person.
   * @param {number} EGN - EGN of the person.
   */
  constructor(firstName, lastName, EGN) {    
    this.firstName = firstName;
    this.lastName = lastName;

    if (!EGN) {
      throw new Error('Invalid person EGN!');
    }
    this.#EGN = EGN;
  }

  /** Gets this person's first name.
   * @returns The name of the first person. 
   */
  get firstName() {    
    return this.#firstName;
  }

  /** Validates and sets a new first name for this person. 
   * @param {string} value - The new first name for the person.
   */
  set firstName(value) {
    if (!value || value.length < 2 || value.length > 20) {
      throw new Error('Invalid person first name!');
    }

    this.#firstName = value;
  }

  /** Gets this person's last name.
   * @returns The name of the last person. 
   */
  get lastName() {    
    return this.#lastName;
  }

  /** Validates and sets a new last name for this person. 
   * @param {string} value - The new last name for the person.
   */
  set lastName(value) {
    if (!value || value.length < 2 || value.length > 20) {
      throw new Error('Invalid person last name!');
    }

    this.#lastName = value;
  }

  /** Gets the aggregate value of firstName and lastName.
   * @returns The full name of the last person. 
   */
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  /** Gets this person's EGN.
   * @returns The EGN of the last person. 
   */
  get EGN() {
    return this.#EGN;
  }

  /** Prints on the console a greeting string with the person's full name and EGN. */
  sayIntroduction() {
    console.log(`Hello, my name is ${this.fullName}, my EGN is ${this.EGN}`);
  }
}