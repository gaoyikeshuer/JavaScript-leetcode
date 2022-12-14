var removeNthFromEnd = function(head, n) {
var dummynode = new ListNode(0)
dummynode.next = head
var firstPointer = dummynode
var secondPointer = dummynode

for(var i=0; i<=n;i++){
    firstPointer= firstPointer.next
   
}
while(firstPointer!=null){
    firstPointer= firstPointer.next
    secondPointer = secondPointer.next
   
}
secondPointer.next = secondPointer.next.next
return dummynode.next



};
