import LinkedListNode from './linked-list-node.js';

export default class Queue {
    #head = null;
    #tail = null;
    #count = 0;

    // add an element to the end of the queue
    enqueue(value) {
        const newNode = new LinkedListNode(value);
        if (this.isEmpty) {
            this.#head = newNode;
        } else {
            this.#tail.next = newNode;
        }
        this.#tail = newNode;
        
        this.#count++;
    }

    // removes first element and returns its value
    dequeue() {
        if (this.isEmpty) {
            throw new Error('Queue is empty, can not dequeue!');
        } 
        const val = this.#head.value;
        this.#head = this.#head.next;
        
        this.#count--;

        return val;
    }

    // returns the value of the first element without removing it
    peek() {
        if (this.isEmpty) {
            throw new Error('Queue is empty!');
        }

        return this.#head.value;
    }

    // return the number of elements in the queue
    get count() {
        return this.#count;
    }

    // checks whether the queue is empty
    get isEmpty() {
        return this.#head === null ? true : false; 
    }
}