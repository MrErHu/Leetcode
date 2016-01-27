class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int vector_num1=m;
        int vector_num2=n;
        int point=vector_num1+vector_num2-1;
        --vector_num1;
        --vector_num2;
        while(vector_num1>=0 && vector_num2>=0){
            if(nums1[vector_num1]>=nums2[vector_num2])
                nums1[point--]=nums1[vector_num1--];
            else
                nums1[point--]=nums2[vector_num2--];
        }
        if(vector_num1>=0)
            while(point>=0)
                nums1[point--]=nums1[vector_num1--];
        if(vector_num2>=0)
            while(point>=0)
                nums1[point--]=nums2[vector_num2--];
    }
};