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
 IDEAL Solution:
var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) return true
    }
    return false
};

var hasCycle = function(head) {
    let vals =[]
    while(head){
        if (vals.includes(head)) return true
        else{
            vals.push(head)
            head = head.next
        }
    }
    return false
};

var hasCycle = function(head) {
    let vals = new Set()
    while(head){
        let prevSize = vals.size
        vals.add(head)
        if (vals.size == prevSize) return true
        head = head.next
    }
    return false
};

var hasCycle = function(head) {
    let vals = new Set()
    while(head){
        if (vals.has(head)) return true
        vals.add(head)
        head = head.next
    }
    return false
};