var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
            
           
        if(map.has(target-nums[i])){ //map.has() only check the key. (key, object)
            return[map.get(target-nums[i]),i] //map.get() only 
        }
         map.set(nums[i],i)          
     
    }
    
    return []
};
