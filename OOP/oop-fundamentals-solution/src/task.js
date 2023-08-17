import { status } from './status.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.

  _name;
  _dueDate;
  _status;

  constructor(name, dueDate) {
    this._name = name;
    this._dueDate = dueDate;
    this._status = status.TODO;
  }

  /**
   * Changes the name of the task.
   * @param {string} value - The new name of the task.
   */
  changeName(value) {
    if (!value) {
      throw new Error('Name not provided!');
    }

    if (value.length < 6 || value.length > 20) {
      throw new Error('Name length not within constraints!');
    }

    this._name = value;
  }

  /**
   * Changes the due date of the task.
   * @param {Date} value - The new due date of the task.
   */
  changeDueDate(value) {
    if (!value) {
      throw new Error('Due date not provided!');
    }

    if (value.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }

    this._dueDate = value;
  }
  
  /** Sets the task status to TODO. */
  reset() {
    this._status = status.TODO;
  }

  /** Sets the task status to IN_PROGRESS. */
  advance() {
    this._status = status.IN_PROGRESS;
  }

  /** Sets the task status to DONE. */
  complete() {
    this._status = status.DONE;
  }

  /** Transforms the task data into a formatted string */
  toString() {
    return `Name: ${this._name}\n` + 
           `Status: ${this._status}\n` +
           `Due: ${this._dueDate.toLocaleDateString()} ${this._dueDate.toLocaleTimeString()}`;
  }
}