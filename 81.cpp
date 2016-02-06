class Solution {
public:
    int search(vector<int>& nums, int target) {
        if(nums.empty())
            return -1;
        int low=0;int high=nums.size()-1;
        int mid;
        while(low<=high){
            mid=(low+high)/2;
            if(nums[mid]==target)
                return true;
            if(nums[mid]<nums[high]) {//mid~high is sorted
                if(target>=nums[mid] && target <=nums[high]){// target is in nums[mid]~nums[high]
                    low=mid+1;
                }else{
                    high=mid-1;
                }
            }else if(nums[mid]>nums[high]){//low~mid is sorted
                if(nums[low]<=target && target <=nums[mid]){
                    high=mid-1;
                }else{
                    low=mid+1;
                }
            }else{//nums[mid]==nums[high]
                high=high-1;
            }
        }
        return false;
    }
};
