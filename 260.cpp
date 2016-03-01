class Solution
{
public:
    vector<int> singleNumber(vector<int>& nums)
    {
        vector<int> ret;
        int number1=0,number2=0;
        int resultOfXor=0;
        if(nums.size()<2)
            return ret;
        for(int i=0;i<nums.size();++i)
            resultOfXor^=nums[i];
        int bit1Postion=Bit1Postion(resultOfXor);
        for(int i=0;i<nums.size();++i)
        {
            if(IsBitofNumberK(nums[i],bit1Postion))
            {
                number1^=nums[i];
            }
            else
            {
                number2^=nums[i];
            }
        }
        ret.push_back(number1);
        ret.push_back(number2);
        return ret;
    }
    int Bit1Postion(int num)
    {
        int postion=0;
        while((num&1)==0 && postion<8* sizeof(int))
        {
            ++postion;
            num=num>>1;
        }
        return postion;
    }
    bool IsBitofNumberK(int num, size_t k)
    {
        num=num>>k;
        if(num&1)
            return true;
        else
            return false;
    }
};
