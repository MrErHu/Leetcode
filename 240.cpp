/*
从右上往坐下搜索
*/
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if(matrix.size()==0)return false;
        int n=matrix.size();
        int m=matrix[0].size();
        int i=0,j=m-1;
        while(i<n && j>=0)
            if(matrix[i][j]==target)
                return true;
            else 
                if(matrix[i][j]>target)
                    j--;
                else
                    i++;
        return false;
    }
};
/*
从左下往右上搜索
*/
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if(matrix.size()==0)return false;
        int n=matrix.size(),m=matrix[0].size();
        int i=n-1,j=0;
        while(i>=0 && j<m)
            if(matrix[i][j]==target)
                return true;
            else
                if(matrix[i][j]>target)
                    --i;
                else
                    ++j;
        return false;
    }
};