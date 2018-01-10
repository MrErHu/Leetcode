# Min Stack

设计一个栈，支持push、pop、top 和 在常量时间中拿到最小值。

push(x) -- 将元素x放入栈中
pop() -- 将栈顶的元素移除
top() -- 移除栈顶的元素
getMin() -- 获得栈中最小的元素

例如

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.