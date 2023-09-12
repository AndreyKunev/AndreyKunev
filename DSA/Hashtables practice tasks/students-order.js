let input = [
    '5 3',
    'Gosho Tosho Penka Miro Stanka',
    'Miro Gosho',
    'Gosho Stanka',
    'Stanka Miro'
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(array) {
        this.head = null;
        this.tail = null;

        this.map = new Map();

        // we'll use map to have easy access to nodes
        for (let i = 0; i < array.length; i++) {
            const node = new ListNode(array[i]);
            this.addLast(node);
            this.map.set(array[i], node);
        }
    }

    addLast(node) {

        if (this.head) {
            this.tail.next = node;
            node.prev = this.tail;
        } else {
            this.head = node;
        }
        this.tail = node;

    }

    find(val) {
        return this.map.get(val);
    }

    removeFirst() {
        if (!this.head) {
            throw new Error('Empty list!');
        }

        const value = this.head.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        return value;
    }

    removeLast() {
        if (!this.head) {
            throw new Error('Empty list!');
        }

        const value = this.tail.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return value;
    }

    removeNode(node) {
        if (this.head === node) {
            this.removeFirst();
        } else if (this.tail === node) {
            this.removeLast();
        } else {
            node.next.prev = node.prev;
            node.prev.next = node.next;
        }
        node.prev = null;
        node.next = null;

        return node;
    }


    insertAfter(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        if (node === this.tail) {
            this.tail = newNode;
        } else {
            node.next.prev = newNode;
        }

        node.next = newNode;
    }

    insertBefore(node, newNode) {
        newNode.next = node;
        newNode.prev = node.prev;
        if (node === this.head) {
            this.head = newNode;
        } else {
            node.prev.next = newNode;
        }

        node.prev = newNode;
    }

    values() {
        let arr = [];

        let pointer = this.head;
        while (pointer) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }

        return arr;
    }

}


const shuffle = (studentOne, studentTwo, doublyLinked) => {
    const studentOneNode = doublyLinked.find(studentOne);
    const studentTwoNode = doublyLinked.find(studentTwo);

    if (studentTwoNode.prev !== studentOneNode) {
        
        doublyLinked.insertBefore(studentTwoNode, doublyLinked.removeNode(studentOneNode));
    }
}

const nAndK = gets().split(' ');

const n = nAndK[0];
const k = nAndK[1];

let order = gets().split(' ');

const list = new DoublyLinkedList(order);


for (let i = 0; i < k; i++) {
    const arr = gets().split(' ');
    const first = arr[0];
    const second = arr[1];
    
    shuffle(first, second, list);
}

print(list.values().join(' '));