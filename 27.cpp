class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int length=nums.size();
        int start=0;
        int i;
        for(i=0;i<nums.size();++i){
            if(nums[i]!=val){
                nums[start++]=nums[i];
            }else{
                --length;
            }
        }
        return length;
    }
};