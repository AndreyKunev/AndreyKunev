import moment from 'moment';

export class Contact {
  static #minNameLength = 3;
  static #maxNameLength = 25;
  static #maxCallLength = 150;
  #name;
  #phone;
  #history;

  constructor(name, phone) {
    this.invalidStringCheck(name);

    if (name.length < Contact.#minNameLength || name.length > Contact.#maxNameLength) {
      throw new Error(`Name length should be between ${Contact.#minNameLength} and ${Contact.#maxNameLength}`);
    }

    this.#name = name;
    this.setPhone(phone);
    this.#history = [];
  }

  /**
   * Checks if the input is valid
   * @param {any} value
   * @throws {Error} if input is not valid
   */
  invalidStringCheck(value) {
    if (!value || !(typeof value === 'string')) {
      throw new Error('Input is not valid!');
    }

  }

  /**
   * Get contact phone number
   * @return {string} phone number
   */
  get phone() {
    return this.#phone;
  }

  /**
   * Get contact name
   * @return {string} name
   */
  get name() {
    return this.#name;
  }

  /**
   * Gets history
   * @return {Array} history
  */
  get history() {
    return [...this.#history];
  }

  /**
   * Sets phone number, performs validation
   * @param {string} phone - phone number to set for contact
   * @throws {Error} if phone number isn't valid
   */
  setPhone(phone) {
    this.invalidStringCheck(phone);

    // we use two regular expressions as we can use either spaces or hyphens, not a mix of both
    const regexHyphen = /^0\d{3}-\d{3}-\d{3}$/;
    const regexSpace = /^0\d{3} \d{3} \d{3}$/;

    if (!(regexHyphen.test(phone) || regexSpace.test(phone))) {
      throw new Error('Invalid phone format - use only spaces or only hyphens!');
    }

    this.#phone = phone;
  }

  /**
   * Logs call to history with time of the call and random duration
   */
  call() {
    const timeOfCall = moment().format('M/D/YYYY h:mm:ss A');
    const callDuration = Math.ceil(Math.random() * Contact.#maxCallLength);
    const callInLogFormat = `[${timeOfCall}]Call: Duration: ${callDuration} sec.`;

    this.#history.push(callInLogFormat);

  }

  /**
   * Validates if message is in valid format and logs to history
   * with time of message
   * @param {string} msg
   */
  message(msg) {
    this.invalidStringCheck(msg);

    const timeOfMessage = moment().format('M/D/YYYY h:mm:ss A');
    const messageInLogFormat = `[${timeOfMessage}]Message: (${msg})`;

    this.#history.push(messageInLogFormat);

  }

  /**
   * Logs history from newest to oldest
   * Logs No entries if history is empty
   */
  viewHistoryLog() {
    if (this.history.length === 0) {
      console.log('No entries');
    } else {
      let logString = `${this.name}'s call log\n`;
      for (let i = this.history.length - 1; i >= 0; i--) {
        const element = this.history[i];
        logString += `${element}\n`;
      }

      console.log(logString);
    }

  }
}
