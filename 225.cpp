class Stack {
public:
    queue<int> in,store;
    // Push element x onto stack.
    void push(int x) {
        in.push(x);
    }

    // Removes the element on top of the stack.
    void pop() {
        int i=in.size()-1;
        for(;i>0;--i){
            store.push(in.front());
            in.pop();
        }
        in.pop();
        i=store.size();
        for(;i>0;--i){
            in.push(store.front());
            store.pop();
        }

    }

    // Get the top element.
    int top() {
        int i=in.size()-1;
        int result;
        for(;i>0;--i){
            store.push(in.front());
            in.pop();
        }
        result=in.front();
        store.push(result);
        in.pop();
        i=store.size();
        for(;i>0;--i){
            in.push(store.front());
            store.pop();
        }
        return result;
    }

    // Return whether the stack is empty.
    bool empty() {
        return in.empty();
    }
};