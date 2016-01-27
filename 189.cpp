class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        auto n=nums.size();
        protate(nums,0,n-k-1);
        protate(nums,n-k,n-1);
        protate(nums,0,n-1);
    }
    void protate(vector<int>& nums, int beg,int end){
        int length=end-beg+1;
        if(length%2==0){
            while(beg<end){
                swap(nums[beg++],nums[end--]);
            }
        }else{
            while(beg+1<end){
                swap(nums[beg++],nums[end--]);
            }
        }
    }
};
