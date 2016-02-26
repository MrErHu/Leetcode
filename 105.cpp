/*
Recursive Version
*/
class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        if(preorder.empty() || inorder.empty())
            return nullptr;
        return  buildTree(preorder,inorder,0,preorder.size()-1,0,inorder.size()-1);

    }
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder , int preleft, int preright, int inleft, int inright){
        TreeNode* root=new TreeNode(preorder[preleft]);
        int inMiddle=find(inorder,preorder[preleft]);
        if(inMiddle==-1 || preleft>preright || inleft>inright)return nullptr;
        int left_length=inMiddle-inleft;
        int right_length=inright-inMiddle;
        if(left_length>0)
            root->left=buildTree(preorder,inorder,preleft+1,preleft+left_length,inleft,inMiddle-1);
        if(right_length>0)
            root->right=buildTree(preorder,inorder,preleft+left_length+1,preright,inMiddle+1,inright);
        return root;
    }
    vector<int>::size_type find(vector<int>& nums,int k){
        if(nums.size()==0) return -1;
        int i=0;
        while(i<nums.size()){
            if(nums[i]==k)
                return i;
            ++i;
        }
        return -1;
    }
};
