/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.dataStack = [];
    this.minStack = [];
    this.minValue = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.dataStack.push(x);
    if(x < this.minValue){
        this.minValue = x;
    }
    this.minStack.push(this.minValue);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.dataStack.pop();
    this.minStack.pop();
    if(this.minStack.length > 0){
        this.minValue = this.minStack.pop();
        this.minStack.push(this.minValue);
    } else {
        this.minValue = Infinity;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const x = this.dataStack.pop();
    this.dataStack.push(x);
    return x;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */