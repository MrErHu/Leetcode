class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size()==0) return 0;
        if(nums.size()==1) return 1;
        int point=1;
        int i=1;
        while(i<nums.size()){
            if(nums[i]!=nums[point-1]){
                nums[point]=nums[i];
                ++i;
                ++point;
            }else{
                ++i;
            }
        }
        return point;
    }
};
