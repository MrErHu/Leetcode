class Stack{

    constructor(){
        this.data = [];
    }

    push(element){
        this.data.push(element);
    }

    pop(){
        this.data.pop();
    }

    size(){
        return this.data.length;
    }

    empty(){
        return this.size() <= 0;
    }

    peek(){
        if(!this.empty()){
            const x = this.data.pop();
            this.data.push(x);
            return x;
        }
    }

}

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.empty()){
        if(this.stack2.empty() === false){
            const value = this.stack2.peek();
            this.stack2.pop();
            return value;
        }else {
            while (!this.stack1.empty()){
                this.stack2.push(this.stack1.peek());
                this.stack1.pop();
            }
            const value = this.stack2.peek();
            this.stack2.pop();
            return value;
        }
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.empty()){
        if(this.stack2.empty() === false){
            return this.stack2.peek();
        }else {
            while (!this.stack1.empty()){
                this.stack2.push(this.stack1.peek());
                this.stack1.pop();
            }
            return this.stack2.peek();
        }
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.empty() && this.stack2.empty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */