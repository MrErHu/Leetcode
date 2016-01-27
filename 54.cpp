class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> container;
        if(matrix.size()==0)
            return container;
        int top=0;
        int bottom=matrix.size()-1;
        int left=0;
        int right=matrix[0].size()-1;
        int i;
        while(top<=bottom && left<=right){
            if(left>right || top>bottom)
                break;
            for(i=left;i<=right;++i)
                container.push_back(matrix[top][i]);
            ++top;
            if(left>right || top>bottom)
                break;
            for(i=top;i<=bottom;++i)
                container.push_back(matrix[i][right]);
            --right;
            if(left>right || top>bottom)
                break;
            for(i=right;i>=left;--i) 
                container.push_back(matrix[bottom][i]);
            --bottom;
            if(left>right || top>bottom)
                break;
            for(i=bottom;i>=top;--i)
                container.push_back(matrix[i][left]);
            ++left;
        }
        return container;
    }
};