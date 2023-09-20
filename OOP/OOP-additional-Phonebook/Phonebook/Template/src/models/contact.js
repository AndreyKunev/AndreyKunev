import moment from 'moment';

export class Contact {
  static #minNameLength = 3;
  static #maxNameLength = 25;
  #name;
  #phone;
  #history;

  constructor(name, phone) {
    this.invalidStringCheck(name);

    if (name.length < Contact.#minNameLength || name.length > Contact.#maxNameLength) {
      throw new Error(`Name length should be between ${Contact.#minNameLength} and ${Contact.#maxNameLength}`);
    }

    this.phone = phone;
  }

  invalidStringCheck(value) {
    if (!value || !(typeof value === 'string')) {
      throw new Error('Input is not valid!');
    }

  }

  get phone() {
    return this.#phone;
  }

  set phone(phone) {
    this.invalidStringCheck(phone);
    const regexHyphen = /^0\d{3}-\d{3}-\d{3}$/;
    const regexSpace = /^0\d{3} \d{3} \d{3}$/;

    if (!(regexHyphen.test(phone)) || !(regexSpace.test(phone))) {
      throw new Error('Invalid phone format - use only spaces or only hyphens!');
    }

    this.#phone = phone;
  }

  call() {
    // missing implementation
  }

  message(msg) {
    // missing implementation
  }

  viewHistoryLog() {
    // missing implementation
  }
}
