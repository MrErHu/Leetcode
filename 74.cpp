class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if(matrix.size()==0)
            return false;
        for(int i=0;i<matrix.size();++i)
            if(binarySearch(matrix[i],target))
                return true;
        return false;

    }
    bool binarySearch(vector<int>& level,int target){
        if(level.size()==0)
            return false;
        int low=0;
        int high=level.size()-1;
        int mid;
        while(low<=high){
            mid=(low+high)/2;
            if(level[mid]==target)
                return true;
            else if(level[mid]>target){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        return false;
    }
};