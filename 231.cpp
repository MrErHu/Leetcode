class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n==1)    return true;
        if(n<=0)    return false;
        while(n>=2){
            if(n%2!=0)  return false;
            n/=2;
        }
        return true;
    }
};
/*
计算二进制数是否1的个数只有1
*/
class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n < 1) return false;
        bitset<32> s(n);
        return s.count() == 1;
    }
};