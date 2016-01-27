class Solution {
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        vector<vector<int>> container;
        vector<int> paths;
        findPaths(root,sum,paths,container);
        return container;

    }
    void findPaths(TreeNode* root, int sum, vector<int>& path, vector<vector<int> >& paths){
        if(!root)
            return;
        path.push_back(root->val);
        if(!root->left &&!root->right &&sum==root->val)
            paths.push_back(path);
        findPaths(root->left,sum-root->val,path,paths);
        findPaths(root->right,sum-root->val,path,paths);
        path.pop_back();
    }
};
