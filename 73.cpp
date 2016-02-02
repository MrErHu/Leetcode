Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        if(matrix.size()==0)return;
        bool colflag=false;
        bool rowflag=false;
        for(int i=0;i<matrix.size();++i)
            if(matrix[i][0]==0){
                rowflag=true;
                break;
            }
        for(int j=0;j<matrix[0].size();++j)
            if(matrix[0][j]==0){
                colflag=true;
                break;
            }
        for(int i=1;i<matrix.size();++i)
            for(int j=1;j<matrix[0].size();++j)
                if(matrix[i][j]==0)
                    matrix[i][0]=matrix[0][j]=0;
        for(int i=1;i<matrix.size();++i)
            for(int j=1;j<matrix[0].size();++j)
                if(matrix[i][0]==0 || matrix[0][j]==0)
                    matrix[i][j]=0;
        if(rowflag)
            for(int i=0;i<matrix.size();++i)
                matrix[i][0]=0;
        if(colflag)
            for(int j=0;j<matrix[0].size();++j)
                matrix[0][j]=0;
    }
};
