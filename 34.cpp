class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> result={-1,-1};
        if(nums.size()==0)
            return result;
        int low=0,high=nums.size()-1;
        while(low<=high){
            int mid=(low+high)/2;
            cout<<low<<" "<<mid<<" "<<high<<endl;
            if(nums[mid]==target){
                high=low=mid;
                while(high<nums.size()&&nums[high]==target)
                    ++high;
                result[1]=--high;
                while(low>=0 && nums[low]==target)
                    --low;
                result[0]=++low;
                return result;
            }else 
            if(nums[mid]<target){
                low=low+1;
            }else{
                high=mid-1;
            }
        }
        return result;
    }
};
