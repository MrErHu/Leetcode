/*
该算法不是很快
*/
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        int point;
        if(numRows==0)
            return result;
        result.push_back({1});
        if(numRows==1){
            return result;
        }
        for(int i=2;i<=numRows;i++) {
            vector<int> temp = result[i-2];
            vector<int> container;
            container.push_back(1);
            for (int j = 1; j <temp.size(); j++) {
                container.push_back(temp[j-1] + temp[j]);
            }
            container.push_back(1);
            result.push_back(container);
        }
        return result;
    }
};