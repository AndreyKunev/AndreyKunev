import { Task } from './task.model.js';

/**
 * Represents a board containing tasks.
 */
export class Board {
  #tasks;
  

  /**
   * Create a new Board instance.
   */
  constructor() {
    this.#tasks = [];
  }

  /**
   * Get the tasks on the board.
   * @type {Task[]}
   */
  get tasks() {
    return this.#tasks;
  }

  /**
   * Get the count of tasks on the board.
   * @type {number}
   */
  get taskCount() {
    return this.tasks.length;
  }

  /**
   * Add a new task to the board.
   * @param {Task} task - The task to be added.
   * @throws {Error} Throws an error if the task already exists on the board or if the provided task is not a valid Task instance.
   */
  add(task) {
    
    const taskIndex = this.tasks.findIndex(existingTask => existingTask === task);
    if (taskIndex >= 0) {
      throw new Error('The provided task already exists in this board!');
    }

    if (!(task instanceof Task)) {
      throw new Error ('Not a valid task!');
    }

    this.tasks.push(task);
  }
  
  /**
   * Remove a task from the board.
   * @param {Task} task - The task to be removed.
   * @throws {Error} Throws an error if the task does not exist on the board.
   */
  remove(task) {
    
    const taskIndex = this.tasks.findIndex(existingTask => existingTask === task);

    if (taskIndex < 0) {
      throw new Error('The provided task does not exist in this board!');
    }

    this.tasks.splice(taskIndex, 1);
  }

  /**
   * Transform the board data into a formatted string.
   * @returns {string} A formatted string containing board and task details.
   */
  toString() {
    const titles = '---Task Board---\n\nTasks:\n\n';

    if (this.tasks.length) {
      return titles + this.tasks.join('\n--------\n');
    }

    return `${titles}No tasks at the moment.`;
  }
}
