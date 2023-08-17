import { status } from '../common/status.enum.js';

/**
 * Represents a task with name, due date, and status.
 */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.

  #name;
  #dueDate;
  #status;

  /**
   * Create a new Task instance.
   * @param {string} name - The name of the task.
   * @param {Date} dueDate - The due date of the task.
   */
  constructor (name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.#status = status.TODO;
  }

  /**
   * Get the name of the task.
   * @type {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * Set the name of the task.
   * @param {string} value - The new name for the task.
   * @throws {Error} Throws an error if the provided name is invalid.
   */
  set name(value) {
    if (!value || value.length < 6 || value.length > 20) {
      throw new Error ('Invalid task name!');
    }

    this.#name = value;
  }

  /**
   * Get the due date of the task.
   * @type {Date}
   */
  get dueDate() {
    return this.#dueDate;
  }

  /**
   * Set the due date of the task.
   * @param {Date} value - The new due date for the task.
   * @throws {Error} Throws an error if the provided due date is invalid.
   */
  set dueDate(value) {
    if (!value) {
      throw new Error('Due date not provided!');
    }

    if (value.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }

    this.#dueDate = value;
  }

  /**
   * Get the status of the task.
   * @type {string}
   */
  get status() {
    return this.#status;
  }

  /**
   * Reset the task status to TODO.
   */
  reset() {
    this.#status = status.TODO;
  }

  /**
   * Set the task status to IN_PROGRESS.
   */
  advance() {
    this.#status = status.IN_PROGRESS;
  }

  /**
   * Set the task status to DONE.
   */
  complete() {
    this.#status = status.DONE;
  }

  /**
   * Transform the task data into a formatted string.
   * @returns {string} A formatted string containing task details.
   */
  toString() {
    return `Name: ${this.name}\n` + 
           `Status: ${this.status}\n` +
           `Due: ${this.dueDate.toLocaleDateString()} ${this.dueDate.toLocaleTimeString()}`;
  }
}
