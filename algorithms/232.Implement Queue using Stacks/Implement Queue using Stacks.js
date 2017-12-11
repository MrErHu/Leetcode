class Stack{

    constructor(){
        this.data = [];
    }

    push(element){
        this.data.push(element);
    }

    pop(){
        let element ;
        if(!this.empty()){
            element = this.data[this.data.length - 1];
            this.peek();
        }
        return element;
    }

    peek(){
        if(!this.empty()){
            this.data.length = this.data.length - 1;
        }
    }

    size(){
        return this.data.length;
    }

    empty(){
        return this.size() <= 0;
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
    return this.peek();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.empty()){
        if(this.stack2.empty() === false){
            return this.stack2.pop();
        }else {
            while (!this.stack1.empty()){
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
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