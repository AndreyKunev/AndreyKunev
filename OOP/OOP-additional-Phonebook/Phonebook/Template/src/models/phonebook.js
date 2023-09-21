import { Contact } from './contact.js';

export class Phonebook {
  #contacts;

  constructor() {
    this.#contacts = [];
  }

  /**
   * @return {Array} contacts
   */
  get contacts() {
    return [...this.#contacts];
  }

  /**
   * Reassigns contacts
   * exists only for testing purposes
   * @param {Array} arr
   */
  set contacts(arr) {
    this.#contacts = [...arr];
  }

  /**
   * Checks if contact is valid and adds to contacts array
   * @param {Contact} contact
   */
  addContact(contact) {
    if (contact === null || contact === undefined || contact === '') {
      throw new Error('Invalid contact!');
    }

    if (this.#contacts.some(el => el === contact)) {
      throw new Error('Contact already exists!');
    }

    this.#contacts.push(contact);
  }

  /**
 * Checks if the input is valid
 * @param {any} value
 * @throws {Error} if input is not valid
 */
  invalidNameCheck(value) {
    if (!value || !(typeof value === 'string')) {
      throw new Error('Input is not valid!');
    }

  }

  /**
   * Removes contact with passed name
   * @param {string} name
   * @throws {Error} if name is invalid or contact doesn't exist
   */
  removeContact(name) {
    this.invalidNameCheck(name);

    for (const contact of this.#contacts) {
      if (contact.name === name) {
        this.#contacts.splice(this.#contacts.indexOf(contact), 1);
        break;
      } else if (this.#contacts.indexOf(contact) === this.#contacts.length - 1) {
        throw new Error('This contact doesn\'t exist!');
      }
    }

  }

  /**
   * Changes contact info
   * @param {string} name
   * @param {string} phone
   * @throws {Error} if name or phone is invalid
   */
  updateContact(name, phone) {
    this.invalidNameCheck(name);

    for (const contact of this.#contacts) {
      if (contact.name === name) {
        contact.setPhone(phone);
      } else if (this.#contacts.indexOf(contact) === this.#contacts.length - 1) {
        throw new Error('This contact doesn\'t exist!');
      }
    }

  }

  /**
   * Creates a string of all contact and their phone numbers
   * @return {string} with all contact info
   */
  listAllContacts() {
    if (this.contacts.length === 0) {
      return 'No contacts.';
    }

    let contactLog = 'All contacts:\n';
    for (const contact of this.#contacts) {
      const contactInfo = `  ${contact.name}: [${contact.phone}]\n`;
      contactLog += contactInfo;
    }

    return contactLog;
  }

  /**
   * Searches for all names with partialName in their names
   * @param {string} partialName
   * @return {Array}
   */
  search(partialName) {
    this.invalidNameCheck(partialName);
    const contactArray = [];

    for (const contact of this.#contacts) {
      if (contact.name.includes(partialName)) {
        contactArray.push(contact);
      }
    }

    return contactArray;
  }
}
