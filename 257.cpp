class Solution {
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> result;
        if(!root)
            return result;
        binaryTreePaths(result,root,to_string(root->val));
        return result;

    }
    void binaryTreePaths(vector<string>& result,TreeNode* root,string container) {
        if(!root->left &&!root->right){
            result.push_back(container);
            return;
        }
        if(root->left){
            binaryTreePaths(result,root->left,container+"->"+to_string(root->left->val));
        }
        if(root->right){
            binaryTreePaths(result,root->right,container+"->"+to_string(root->right->val));
        }

    }
};