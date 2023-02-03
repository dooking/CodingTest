/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let stack = [];
  let cur = head;
  let size = 0;
  while (cur) {
    stack.push(cur.val);
    cur = cur.next;
    size += 1;
  }
  for (let i = 0; i < Math.floor(size / 2); i++) {
    if (stack[i] !== stack[stack.length - i - 1]) {
      return false;
    }
  }
  return true;
};
