class Stack {
    #stackArr;
    constructor(stackArr = []) {
        if (!Array.isArray(stackArr)) throw new Error(`Stack Initialization Failed: expected stackArr to be an "array" but received "${typeof stackArr}"`);
        this.#stackArr = stackArr;
    }

    push(value) {
        this.#stackArr.push(value);
    }

    pop() {
        return this.#stackArr.pop();
    }

    peek() {
        return this.#stackArr[this.#stackArr.length - 1];
    }

    empty() {
        return this.#stackArr.length === 0;
    }

    size() {
        return this.#stackArr.length;
    }
}