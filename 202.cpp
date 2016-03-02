class Solution
{
public:
    bool isHappy(int n)
    {
        set<int> nums;
        int result=n;
        while(result!=1)
        {
            int temp=0;
            while(result!=0)
            {
                temp+=(result%10)*(result%10);
                result/=10;
            }
            if(nums.find(temp)!=nums.end())
            {
                return false;
            }
            else
            {
                nums.insert(temp);
                result=temp;
            }
        }
        return true;
    }
};
