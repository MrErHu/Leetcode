class Solution {
public:
    int sumNumbers(TreeNode* root) {
        vector<int> container;
        string s;
        int sum=0;
        if(!root)
            return sum;
        sumNumbers(root,container,s);
        sum=accumulate(container.begin(),container.end(),sum);
        return sum;
    }
    void sumNumbers(TreeNode* root,vector<int>& container,string s){
        if(root){
            s+=to_string(root->val);
            if(!root->left && !root->right){
                container.push_back(stoi(s));
            }
            sumNumbers(root->left,container,s);
            sumNumbers(root->right,container,s);
        }
    }
};
