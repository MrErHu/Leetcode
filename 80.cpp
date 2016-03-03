class Solution
{
public:
    int removeDuplicates(vector<int>& nums)
    {
        if(nums.size()<=2)
            return nums.size();
        int currentPos=2;
        for(int i=2;i<nums.size();++i)
        {
            if(nums[i]==nums[currentPos-1] && nums[currentPos-2]==nums[currentPos-1])
                continue;
            else
                nums[currentPos++]=nums[i];
        }
        return currentPos;
    }
};
