//Original Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    var dummy = new ListNode(0)
    dummy.next = head
    var first = dummy
    var second = dummy.next
    for(i=0;i<k;i++){
        first = first.next
    }
   
    var newHead = first
    var val1 =newHead.val

    while(first.next!=null){
        first= first.next
        second= second.next
      
    }
    var val2 = second.val
    second.val= val1
    newHead.val = val2
  
    return dummy.next
  
};
