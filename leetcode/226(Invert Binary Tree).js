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
var invertTree = function (root) {
  let cur = root;
  console.log("!!", root);
  if (!root) {
    return root || null;
  }
  [cur.left, cur.right] = [cur.right, cur.left];
  root.left = invertTree(cur.left);
  root.right = invertTree(cur.right);
  console.log(root, root.left, root.right);
  return root;
};
