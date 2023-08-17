
export class UniqueList {
    elements;
    constructor() {
        this.elements = [];
    }

    add(element) {
        console.log(this.elements);
        if (!this.elements.some(x => x === element)) {
            this.elements.push(element);
        }
    }

    has(element) {
        return this.elements.some(x => x === element);
    }

    getElements() {
        return this.elements;
    }
}

