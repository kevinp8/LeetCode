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