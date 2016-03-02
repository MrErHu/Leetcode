class Solution
{
public:
    int singleNumber(vector<int>& nums)
    {
        int one=0; //二进制1出现“1次”的数位
        int two=0; //twos记录到当前计算的变量
        int three=0;
        for(int i=0;i<nums.size();++i)
        {
            two=two|(nums[i]&one);
            one=nums[i]^one;
            three=~(one&two);
            one=one&three;
            two=two&three;
        }
        return one;
    }
};

