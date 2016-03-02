class Solution
{
public:
    int findDuplicate(vector<int>& nums)
    {
        for(int i=nums.size()-1;i>0;--i)
        {
            while(nums[i]!=i)
            {
                if(nums[i]==nums[nums[i]])
                {
                    return nums[i];
                }
                swap(nums[i],nums[nums[i]]);
            }
        }
        return nums[0];
    }
};
