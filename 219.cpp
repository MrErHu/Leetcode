/*
哈希查找
*/
Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        set<int> set1;
        if(nums.size()==0 || k<=0)
            return false;
        if(k>=set1.size())
            k=set1.size()-1;
        for(int i=0;i<set1.size();++i){
            if(i>k)
                set1.erase(nums[i-k-1]);
            if(set1.find(nums[i])!=set1.end())
                return true;
            set1.insert(nums[i]);
        }
        return false;
    }
};
