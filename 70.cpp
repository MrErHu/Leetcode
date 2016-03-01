class Solution
{
public:
    int climbStairs(int n)
    {
        if(n<0)
            exit(-1);
        int number1=1;
        int number2=2;
        if(n<=2)
            return n==1 ? number1 : number2;
        for(int i=3;i<=n;++i)
        {
            int sum=number1+number2;
            number1=number2;
            number2=sum;
        }
        return number2;
    }
};
