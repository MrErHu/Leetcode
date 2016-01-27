class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ham_w=0;
        unsigned int index=2147483648;//基数
        while(n>0 &&index>0){
            if(n>=index){++ham_w;n=n-index;}
            index/=2;
        }
        return ham_w;
    }
};