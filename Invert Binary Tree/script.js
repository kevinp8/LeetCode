/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function invert(node){
        if (!node) return root
        const left = node.left
        const right = node.right
        node.left = right
        node.right = left
        invert(node.left)
        invert(node.right)
    }
    invert(root)
    return root
};
