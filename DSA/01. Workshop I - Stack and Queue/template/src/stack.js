import LinkedListNode from './linked-list-node.js';

export default class Stack {
    #head = null;
    #count = 0;

    // add to top
    push(value) {
        const newNode = new LinkedListNode(value);
        newNode.next = this.#head;
        this.#head = newNode;

        this.#count++;
    }

    // remove from top and return removed element's value 
    pop() {
        if (this.isEmpty) {
            throw new Error('Can not remove item as stack is empty!');
        }

        const val = this.#head.value;
        this.#head = this.#head.next;

        this.#count--;

        return val;
    }

    // returns top element's value without removing it
    peek() {
        if (this.isEmpty) {
            throw new Error('Stack is empty!');
        }

        return this.#head.value;
    }

    // returns length of stack
    get count() {
        return this.#count;
    }

    // checks if stack is empty
    get isEmpty() {
        return this.#head === null ? true : false;
    }

}