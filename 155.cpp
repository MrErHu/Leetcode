class MinStack {
public:
    vector<int> a;
    vector<int> min;
    MinStack() {
        min.push_back(2147483647);
    }
    void push(int x) {
        a.push_back(x);
        if (x < min.back()) {
            min.push_back(x);
        } else {
            min.push_back(min.back());
        }
    }

    void pop() {
        a.pop_back();
        min.pop_back();
    }

    int top() {
        return a.back();
    }

    int getMin() {
        return min.back();
    }
};

class MinStack {
public:
    stack<long>in;
    int min;
    void push(int x) {
        if(in.empty()){
            in.push(x);
            min=x;
        }else{
            in.push(x-min);
            if(min>x)
                min=x;
        }
    }

    void pop() {
        if(in.empty())
            return;
        if(in.size()==1) {
            in.pop();
            return;
        }
        if(in.top()>0)
            in.pop();
        else{
            min=min-in.top();
            in.pop();
        }
    }
    int top() {
        if(in.size()==1)
            return min;
        if(in.top()>0)
            return in.top()+min;
        else
            return min;
    }
    int getMin() {
        return min;
    }
};