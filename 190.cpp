class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        bitset<32> bit(n);
        string bit_s=bit.to_string();
        char temp;
        for(int i=0;i<16;++i){
            temp=bit_s[i];
            bit_s[i]=bit_s[31-i];
            bit_s[31-i]=temp;
        }
        bit=bitset<32>(bit_s);
        return bit.to_ulong();
    }
};