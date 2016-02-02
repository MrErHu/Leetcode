Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        vector<int> result;
        if(nums.size()==0)
            return result;
        unordered_map<int,size_t> container;
        int length=nums.size()/3;
        for(int num:nums){
            ++container[num];
        }
        for(auto p:container)
            if(p.second>length)
                result.push_back(p.first);
    }
};
/*
非哈希解法
*/
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int first,second;
        int ftimes=0,stimes=0;
        vector<int> result;
        if(nums.size()==0)
            return result;
        for(int num:nums){
            if(ftimes>0 && stimes>0){
            }else if(ftimes>0){
                if(num==first)
                    ++ftimes;
                else{
                    second=num;
                    ++stimes;
                }
            }else if(stimes>0){
                if(num==second)
                    ++second;
                else{
                    first=num;
                    ++ftimes;
                }
            }else{
                first=num;
                ++ftimes;
            }
        }
        ftimes=stimes=0;
            for(int num:nums){
                if(num==first)
                    ++ftimes;
                else if(num==second)
                    ++stimes;
            }
            if(ftimes>(nums.size()/3))
                result.push_back(first);
            if(stimes>(nums.size()/3))
                result.push_back(second);
            return result;
    }
};
