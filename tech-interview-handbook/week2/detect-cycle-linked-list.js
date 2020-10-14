/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  O(n)/O(n)
const hasCycle = function (head) {
  nodesSeen = new Set();
  while (head != null) {
    if (nodesSeen.has(head)) {
      return true;
    }
    nodesSeen.add(head);

    head = head.next;
  }
  return false;
};


// O(n)/O(1)   2 pointers solution

hasCycle(head) {
  if (head == null) {
    return false;
  }

  slow = head;
  fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}