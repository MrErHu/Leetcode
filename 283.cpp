class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zero_nums=0;
        int i;
        for(i=0;i<nums.size();i++)
            if(nums[i]==0)  ++zero_nums;
            else nums[i-zero_nums]=nums[i];
         i=nums.size()-zero_nums;
         while(i<nums.size())
             nums[i++]=0;
    }
};