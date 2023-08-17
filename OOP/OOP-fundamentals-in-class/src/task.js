import moment from '../node_modules/moment/moment.js';
import { status } from './status.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.
  static taskCount = 0;
  _name;
  _dueDate;
  _status;


  constructor(taskName, date) {
    this.taskNameValidation(taskName);
    this._name = taskName;
    this.dueDateValidation(date);
    date = moment(date).format('YYYY/MM/DD hh:mm:ss A');
    this._dueDate = date;
    this._status = status.TODO;
  }

  /**
   * Validates task name
   * @param {taskName} taskName - title of the task
   */
  taskNameValidation(taskName) {
    if (!taskName || taskName.length < 6 || taskName.length > 20) {
      throw new Error (`${taskName} is an invalid task name!`);
    }
  }

  /**
   * Validates date
   * @param {date} date - date to validate
   */
  dueDateValidation(date) {
    if (date < moment()) {
      throw new Error('Can\'t set due date to a date in the past!');
  }
  }

  /**
   * Changes task name if the passed value is valid
   * @param {any} value 
   */
  changeName(value) {
    this.taskNameValidation(value);
    this._name = value;
  }

  /**
   * Changes due date if the passed value is valid
   * @param {any} value 
   */
  changeDueDate(value) {
    this.dueDateValidation(value);
    this._dueDate = value;
  }

  /**
   * Resets the status of the task to TODO
   */
  reset() {
    this._status = status.TODO;
  }

  /**
   * Changes the status of the task to in progress
   */
  advance() {
    this._status = status.IN_PROGRESS;
  }

  /**
   * Changes the status of the task to done
   */
  complete() {
    this._status = status.DONE;
  }

  /**
   * Makes task instance readable
   * @returns instance in readable string format
   */
  toString() {
    return 'Name: ' + this._name +
        '\nStatus: ' + this._status +
        '\nDue: ' + this._dueDate;
  }
}