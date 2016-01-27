class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int count=0;
        digits[digits.size()-1]+=1;
        for(int i=digits.size()-1;i>=0;--i){
            digits[i]+=count;
            count=digits[i]/10;
            digits[i]=digits[i]%10;
            if(count==0)
                break;
        }
        if(count!=0)
            digits.insert(digits.begin(),count);
        return digits;
    }
};