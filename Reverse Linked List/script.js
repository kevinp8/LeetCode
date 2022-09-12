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
var reverseList = function(head) {
    let first = true
    let reversed = null
    while (head != null) {
        if (first) {
            reversed = new ListNode(head.val)
            first = false
            head = head.next
        } else {
            reversed = new ListNode(head.val, reversed)
            head = head.next
        }
        
    }
    return reversed
};