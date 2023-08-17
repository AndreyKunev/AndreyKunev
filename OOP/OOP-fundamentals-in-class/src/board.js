import { Task } from './task.js';

/** The Board class holds tasks */
export class Board {

    _tasks;

    constructor() {
        this._tasks = [];
    }

    /**
     * add task to board if it isn't already in the list
     * @param {Task} task - the task to be added
     */
    add(task) {
        if (this._tasks.includes(task)) {
            throw new Error ('This task is already in the list!');
        } else{
            this._tasks.push(task);
        }
    }

    /**
     * removes task from board or throws error if it isn't in the list
     * @param {Task} task - the task to be removed
     */
    remove(task) {
        if (this._tasks.includes(task)) {
            this._tasks.splice(this._tasks.indexOf(task), 1);
        } else {
            throw new Error ('This task is not in the list!');
        }
    }

    /**
     * formats the board to be readable 
     * @returns taskBoard
     */
    toString() {
        let taskBoard = '---Task Board--- \n \n Tasks: \n \n'; 
        if (this._tasks.length === 0){
            taskBoard += 'No tasks at the moment.';
        } else {
            taskBoard += `${this._tasks.join('\n -------- \n').toString()}`;
        }
        return taskBoard;
    }
}