let input = [
    '7 4',
    '1 5 4 7'
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


const shuffle = (doublyLinked, shuffleArr) => {
    for (const nodeVal of shuffleArr) {
        
        if (nodeVal % 2 !== 0) {
            const value = nodeVal * 2;
            const nodeToMove = doublyLinked.find(Number(nodeVal));
            if (value > n) {
                if (nodeVal == n) {
                    continue;
                }
                const nodeToMoveAfter = doublyLinked.find(Number(n));
                doublyLinked.removeNode(nodeToMove);
                doublyLinked.insertAfter(nodeToMoveAfter, nodeToMove);
            } else {
                const nodeToMoveAfter = doublyLinked.find(value);
                doublyLinked.removeNode(nodeToMove);
                doublyLinked.insertAfter(nodeToMoveAfter, nodeToMove);
            }
        } else {
            const value = nodeVal / 2;
            const nodeToMove = doublyLinked.find(Number(nodeVal));
            const nodeToMoveAfter = doublyLinked.find(value);
            doublyLinked.removeNode(nodeToMove);
            doublyLinked.insertAfter(nodeToMoveAfter, nodeToMove);
        }
    }
}


const nAndK = gets().split(' ');

const n = nAndK[0];
const k = nAndK[1];

const toShuffle = gets().split(' ');
const initialArr = [];

for (let i = 1; i <= n; i++) {
    initialArr.push(i);
}

const list = new DoublyLinkedList(initialArr);

shuffle(list, toShuffle)

print(...list.values());

// print(list.find(2));