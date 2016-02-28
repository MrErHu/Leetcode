 class Solution
{
public:
    int nthUglyNumber(int n)
    {
        if(n <= 0)
            return 0;
        int *pUglyNumber=new int [n];
        int nextUglyNumber=1;
        pUglyNumber[0]=1;

        int *pUglyMulti2=pUglyNumber;
        int *pUglyMulti3=pUglyNumber;
        int *pUglyMulti5=pUglyNumber;
        
        while(nextUglyNumber<n)
        {
            int min=Min(*pUglyMulti2 *2, *pUglyMulti3 *3, *pUglyMulti5 *5);
            pUglyNumber[nextUglyNumber]=min;
            while(*pUglyMulti2 *2 <= pUglyNumber[nextUglyNumber])
                ++pUglyMulti2;
            while(*pUglyMulti3 *3 <= pUglyNumber[nextUglyNumber])
                ++pUglyMulti3;
            while(*pUglyMulti5 *5 <= pUglyNumber[nextUglyNumber])
                ++pUglyMulti5;
            ++nextUglyNumber;
        }
        int ret=pUglyNumber[n-1];
        delete [] pUglyNumber;
        return  ret;
    }
    int Min(const int &a, const int &b, const int &c)
    {
        int ret=min(a,b);
        ret=min(ret,c);
        return ret;
    }
};
