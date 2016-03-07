/*
本质是求卡特兰数
*/
class Solution
{
public:
    int numTrees(int n)
    {
        if(n<0)
            return 0;
        if(n<2)
            return 1;
        int *ptrArray=new int [n+1];
        ptrArray[0]=1;
        ptrArray[1]=1;
        for(int i=2;i<=n;++i)
            ptrArray[i]=0;
        for(int i=2;i<=n;++i)
            for(int j=0;j<i;++j)
                ptrArray[i]+=ptrArray[j]*ptrArray[i-1-j];
        return ptrArray[n];
    }
};
