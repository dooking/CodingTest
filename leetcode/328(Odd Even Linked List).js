/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let cur = head;
  let idx = 0;
  let stack1 = [];
  let stack2 = [];
  while (cur) {
    if (idx % 2 === 1) {
      stack2.push(cur.val);
    } else {
      stack1.push(cur.val);
    }
    idx++;
    cur = cur.next;
  }
  let answer = null;
  idx = 0;
  let stack = stack1.concat(stack2);
  while (stack.length) {
    answer = new ListNode(stack.pop(), answer);
  }
  return answer;
};
