/*
纯数学方法解答该题
时间复杂度为O（K）
*/
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> res(rowIndex + 1, 1);
     for(int k = 1; k <= (rowIndex + 1)/2; k++)
        res[k] = res[rowIndex - k] = (long)res[k - 1]*(long)(rowIndex - k + 1)/k;
            return res;
        }
};