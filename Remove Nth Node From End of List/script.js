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
 Optimized solution:
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let left = dummy
    let right = head

    while(n>0) {
        right = right.next
        n--
    }
    while(right){
        left = left.next
        right = right.next
    }
    left.next = left.next.next

    return dummy.next
};
 
var removeNthFromEnd = function(head, n) {
    let nodes = []
    while (head) {
        nodes.push(head)
        head = head.next
    }

    let cutNode = nodes[nodes.length-n]
    if (cutNode === nodes[0]) return nodes[0].next
    else nodes[nodes.length-n-1].next = cutNode.next

    return nodes[0]
};