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
var sortList = function (head) {
  let cur = head;
  let stack = [];
  while (cur) {
    stack.push(cur.val);
    cur = cur.next;
  }
  stack.sort((a, b) => a - b);
  let answer = null;
  cur = head;
  while (cur) {
    answer = new ListNode(stack.pop(), answer);
    cur = cur.next;
  }
  return answer;
};
