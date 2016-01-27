class Solution {
public:
    bool isPowerOfThree(int n) {
        while(n>=3){
            if(n%3!=0)  return false;
            n=n/3;
        }
        if(n==1) return true;
        else return false;
    }
};