class Queue {

    constructor() {
        this.data = [];
    }

    push(x) {
        this.data.push(x);
    }

    pop() {
        if (!this.empty()) {
            return this.data.shift();
        }
    }

    peek() {
        if (!this.empty()) {
            return this.data[0];
        }
    }

    size() {
        return this.data.length;
    }

    empty() {
        return this.size() <= 0;
    }

}


/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (!this.empty()) {
        let result;
        while (!this.queue1.empty()) {
            const x = this.queue1.pop();
            if (!this.queue1.empty()) {
                this.queue2.push(x);
            } else {
                result = x;
            }
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return result;
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (!this.empty()) {
        let result;
        while (!this.queue1.empty()) {
            const x = this.queue1.pop();
            if (this.queue1.empty()) {
                result = x;
            }
            this.queue2.push(x);
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return result;
    }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */