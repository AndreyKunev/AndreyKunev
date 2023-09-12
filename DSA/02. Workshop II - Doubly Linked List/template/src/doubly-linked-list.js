import LinkedListNode from "./linked-list-node.js";

export default class DoublyLinkedList {
    #head = null;
    #tail = null;
    #count = 0;

    // add a new node as the first in the list
    addFirst(value) {
        const newNode = new LinkedListNode(value);
        if (this.isEmpty) {
            this.#tail = newNode;
        } else {
            this.#head.prev = newNode;
            newNode.next = this.#head;
        }
        
        this.#count++;
        this.#head = newNode;
    }

    // add new node as the last in the list
    addLast(value) {
        const newNode = new LinkedListNode(value);
        if (this.isEmpty) {
            this.#head = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
        }

        this.#count++;
        this.#tail = newNode;
    }

    // removes the first element and returns its value
    removeFirst() {
        if (this.isEmpty) {
            throw new Error('Can\'t remove from empty list!');
        }
        const val = this.#head.value;
        if (this.count === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head.next.prev = null;
            this.#head = this.#head.next;
        }

        this.#count--;
        return val;
    }

    // removes last element and returns its value
    removeLast() {
        if (this.isEmpty) {
            throw new Error('Can\'t remove from empty list!');
        }
        const val = this.#tail.value;
        if (this.count === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail.prev.next = null;
            this.#tail = this.#tail.prev;
        }

        this.#count--;
        return val;
    }

    // inserts an element with a given value before the specified node
    insertBefore(node, value) {
        if (node === null) {
            throw new Error('Not a valid node!');
        } else if (this.#head === node) {
            this.addFirst(value);
            this.#count--;
        } else {
            const newNode = new LinkedListNode(value);
            newNode.next = node;
            newNode.prev = node.prev;
            node.prev.next = newNode;
            node.prev = newNode;
        }
        this.#count++;
    }

    // inserts an element with a given value after the specified node 
    insertAfter(node, value) {
        if (node === null) {
            throw new Error('Not a valid node!');
        } else if (this.#tail === node) {
            this.addLast(value);
            this.#count--;
        } else {
            const newNode = new LinkedListNode(value);
            newNode.next = node.next;
            newNode.prev = node;
            node.next.prev = newNode;
            node.next = newNode;
        }
        this.#count++;
    }

    // return the first node that has a given value or null if no such value exists
    find(value) {
        let resultNode = null;
        let current = this.#head;
        while(current) {
            if (current.value === value) {
                resultNode = current;
                break;
            }

            current = current.next;
        }

        return resultNode;
    }

    // returns all values as an array
    values() {
        if (this.isEmpty) {
            return [];
        }
        const valArr = [];

        let current = this.#head;
        while (current) {
            valArr.push(current.value);
            current = current.next;
        }

        return [...valArr];
    }

    // returns the head reference
    get head() {
        return this.#head;
    }

    // returns the tail reference
    get tail() {
        return this.#tail;
    }

    // return number of nodes in the list
    get count() {
        return this.#count;
    }

    // checks if list is empty
    get isEmpty() {
        return this.#head === null ? true : false;
    }
}