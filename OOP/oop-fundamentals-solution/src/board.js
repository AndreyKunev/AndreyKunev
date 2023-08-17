/** The Board class holds tasks */
export class Board {
  _tasks;

  constructor() {
    this._tasks = [];
  }

  /** Adds a new task to the board. */
  add(task) {
    const taskIndex = this._tasks.findIndex(existingTask => existingTask === task);

    if (taskIndex >= 0) {
      throw new Error('The provided task already exists in this board!');
    }

    // How can we ensure the passed value is actually an object created from the Task class?
    this._tasks.push(task);
  }
  
  /** Removes a task from the board. */
  remove(task) {
    const taskIndex = this._tasks.findIndex(existingTask => existingTask === task);

    if (taskIndex < 0) {
      throw new Error('The provided task does not exist in this board!');
    }

    this._tasks.splice(taskIndex, 1);
  }

  /** Transforms the board data into a formatted string. */
  toString() {
    const titles = '---Task Board---\n\nTasks:\n\n';

    if (this._tasks.length) {
      return titles + this._tasks.join('\n--------\n');
    }

    return 'No tasks at the moment.';
  }
}