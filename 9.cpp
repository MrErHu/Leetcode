/*
速度相对慢
*/
class Solution
{
public:
    bool isPalindrome(int x)
    {
        stringstream ss;
        ss<<x;
        string num;
        ss>>num;
        if(num.empty())
            return true;
        int i=0,j=num.size()-1;
        while(i<j)
        {
            if(num[i]!=num[j])
                return false;
            ++i;
            --j;
        }
        return true;
    }
};
/*
高效算法
*/
class Solution
{
public:
    bool isPalindrome(int x)
    {
        if(x<0)
            return false;
        int origin_number=x;
        int new_number=0;
        while(origin_number!=0)
        {
            new_number=new_number*10+(origin_number%10);
            origin_number/=10;
        }
        return new_number==x;
    }
};
