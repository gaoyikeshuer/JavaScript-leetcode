function minimumGroups(arr, k) {
    // Write your code here
  arr.sort((a, b) => a-b);  // this line is updated.
  let start = 0;
  if(arr.length == 0) return 0;
  // If arr has some value then at least can form 1 group
  let count = 1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] - arr[start] > k) {
      count++;
      start = i;
    }
  }
  return count;
};

console.log(minimumGroups([ 1, 13, 6, 8, 9, 3, 5 ], 4));