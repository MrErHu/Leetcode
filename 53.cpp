class Solution
{
public:
    int maxSubArray(vector<int>& nums)
    {
        if(nums.size()==0)
            exit(-1);
        int current=0;
        int greaternmum=0x80000000;//最小值
        
        for(int i=0;i<nums.size();++i)
        {
            if(current<=0)
                current=nums[i];
            else
                current+=nums[i];
            if(current>greaternmum)
                greaternmum=current;
        }
        return greaternmum;
    }
};
