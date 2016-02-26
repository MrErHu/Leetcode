/*
Recursive Version
*/
class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        if(inorder.size()==0 | postorder.size()==0) return nullptr;
        return buildTree(inorder, postorder,0,inorder.size()-1,0,postorder.size()-1);

    }
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder , int inleft, int inright, int postleft, int postright){
        if(inleft>inright || postleft>postright)return nullptr;
        TreeNode* root=new TreeNode(postorder[postright]);
        int inMiddle=find(inorder,postorder[postright]);
        if(inMiddle==-1) return nullptr;
        int left_length=inMiddle-inleft;
        int right_length=inright-inMiddle;
        if(left_length>0)
            root->left=buildTree(inorder,postorder,inleft,inMiddle-1,postleft,postright-right_length-1);
        if(right_length>0)
            root->right=buildTree(inorder,postorder,inMiddle+1,inright,postright-right_length,postright-1);
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
