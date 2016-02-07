/*
冒泡算法改进解法
*/
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int end=nums.size()-1;
        while(end>0){
            int i=0;
            while(i<end){
                if(nums[i]>nums[i+1])
                    swap(nums[i],nums[i+1]);
                ++i;
            }
            if(end==nums.size()-k)
                break;
            --end;
        }
        return nums[end];
    }
};
/*
改进算法，时间12ms
*/
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        quickSortVariant(nums, nums.size() - k, 0, nums.size() - 1);
        return nums[nums.size() - k];
    }
    
    int getRand(int start, int end){
        if(end < start) {
            return 0;
        }
        srand((unsigned)time(0));
        return rand()%(end-start+1) + start;
    }
    
    int swap(vector<int>& nums, int i, int j){
        int temp = nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }
    
    void quickSortVariant(vector<int>& nums, int k, int start, int end){
        int flag = getRand(start, end); //找到一个标记元素
        swap(nums, start, flag);
        int flagNum = nums[start];
        int i=start, j=end;
        while(i<j){
            while(j>i&&nums[j]>=flagNum){
                j--;
            }
            nums[i]=nums[j];
            while(j>i&&nums[i]<=flagNum){
                i++;
            }
            nums[j]=nums[i];
        }
        nums[i]=flagNum;
        if(i>k){
            quickSortVariant(nums, k, start, i - 1);
        }else if(i<k){
            quickSortVariant(nums, k, i+1, end);
        }
    }
};
