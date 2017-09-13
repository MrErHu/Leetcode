/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {

    let frequencyMap = new Map();

    traversal(root, frequencyMap);


    let maxCount = 0;
    let maxArray = [];

    for (let [key, value] of frequencyMap) {
        if(value > maxCount){
            maxCount = value;
            maxArray = [key];
        }else if(maxCount === value){
            maxArray.push(key);

        }
    }

    return maxArray;

    function traversal(root, map) {
        if (!root) {
            return 0;
        }

        let left = traversal(root.left, map);
        let right = traversal(root.right, map);
        const val = left + right + root.val;
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
        return val;
    }

};