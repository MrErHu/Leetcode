class Solution {
public:
    int findMin(vector<int>& nums) {
        int index1=0;
        int index2=nums.size()-1;
        int indexMid=index1;
        while(nums[index1]>nums[index2])
        {
            if(index2-index1==1) 
            {
                indexMid = index2;
                break;
            }
            indexMid=(index1+index2)/2;
            if(nums[index1]<=nums[indexMid])
                index1=indexMid;
            else
                if(nums[indexMid]<=nums[index2])
                    index2=indexMid;
        }
        return nums[indexMid];
    }
};

