/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(r1, r2) {
  //If one is null, set it to the other!
  //If the other one is null too, that's fine, we'll just be null!
  if (r1 == null) return r2;
  //
  if (r2 == null) return r1;
  //Now that we are both not null...
  //we can just override the value at one and keep it
  r1.val += r2.val;
  //Keep replacing root one's left and right tree/subtree!
  r1.left = mergeTrees(r1.left, r2.left);
  r1.right = mergeTrees(r1.right, r2.right);

  //Once all the recursive calls/the stack clears, we will still have the r1, so just return that, since we merged into that one!
  return r1;
};
