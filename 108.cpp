/*
Convert Sorted Array to Binary Search Tree
*/
Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
      if(nums.empty())
        return nullptr;
      return buildBST(nums,0,nums.size()-1);

    }
    TreeNode* buildBST(vector<int> &nums,int left,int right){
      if(left<right){
        int middle=(left+right)/2;
        TreeNode* root=new TreeNode(nums[middle]);
        root->left=buildBST(nums,left,middle-1);
        root->right=buildBST(nums,middle+1,right);
        return root;
      }
      if(left==right){
        TreeNode *root=new TreeNode(nums[left])      
	 return root;
      }
      return nullptr;
    }
i};
