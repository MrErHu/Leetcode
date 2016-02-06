/*
ordinary algorithm
current but runtime
time O(n)
*/
class Solution {
public:
    double myPow(double x, int n) {
        if(x==0)
            return 1.0;
        if(x<0)
            return 1.0/myPow(x,-n);
        return x*myPow(x,n-1);
    }
};
/*
time O(logn)
*/
class Solution {
public:
    double myPow(double x, int n) {
        if(x==0)
            return 1.0;
        if(x<0)
            return 1.0/myPow(x,-n);
        double half = pow(x,n>>1);
        if(n%2==0)
            return half*half;
        else
            return half*half*x;
    }
};
