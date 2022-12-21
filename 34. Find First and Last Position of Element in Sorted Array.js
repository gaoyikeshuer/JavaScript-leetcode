var searchRange = function(nums, target) {
   let start = 0;
   let end = nums.length-1;
   let FP = -1;
   let LP = -1;
  
   while(start<=end){
       const mid = Math.floor((start+end)/2);
      if(nums[mid]<target){
           start = mid +1;
       }else{
           end = mid-1;
       }
      
   }
    
   if(nums[start]!=target) return[-1,-1]
   FP =start

   start =0
 end = nums.length-1
   while(start<=end){
       let mid = Math.floor((start+end)/2);
       if(nums[mid]<=target) start=mid+1;
       else end = mid -1
   }
   LP = end
   

 return [FP,LP];
};
