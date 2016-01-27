class Solution {
    public:
        vector<vector<int>> generateMatrix(int n) {
            vector<vector<int>> container(n,vector<int>(n));
            if(n==0)
                return container;
            int top=0;
            int bottom=n-1;
            int left=0;
            int right=n-1;
            int i;
            int count=1;
            while(top<=bottom && left<=right){
                if(left>right || top>bottom)
                    break;
                for(i=left;i<=right;++i)
                    container[top][i] = count++;
                ++top;
                if(left>right || top>bottom)
                    break;
                for(i=top;i<=bottom;++i)
                    container[i][right]=count++;
                --right;
                if(left>right || top>bottom)
                    break;
                for(i=right;i>=left;--i)
                    container[bottom][i]=count++;
                --bottom;
                if(left>right || top>bottom)
                    break;
                for(i=bottom;i>=top;--i)
                    container[i][left]=count++;
                ++left;
            }
            return container;
        }
};