/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 요소 저장
  let numList = [];
  let node = head;
  while (node) {
    numList.push(node.val);
    node = node.next;
  }
  let result = null;
  let cnt = 1;
  while (numList.length) {
    let val = numList.pop();
    if (cnt !== n) {
      result = new ListNode(val, result);
    }
    cnt++;
  }
  return result;
};
