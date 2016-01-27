class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> container;
        auto beg=nums.begin();
        auto end=nums.end();
        while(beg!=end){
            if(container.find(*beg)!=container.end()){
                return true;
            }else{
             container.insert(*beg);
            }
            ++beg;
        }
        return false;

    }
};