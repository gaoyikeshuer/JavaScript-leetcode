function problem1(arr, k) {
    let index = [], sum = 0, max = arr.reduce((a, b) => a + b)
    
    for(let i = 0; i < k; ++i) {
          sum += arr[i]
    }
    
    let currSum = sum
    for(let i = k; i < arr.length; ++i) {
      currSum = currSum + arr[i] - arr[i-k]
      sum = Math.max(currSum, sum)
    }
    console.log(max-sum)
    return max-sum
  }
  problem1([4,1,6,5,3], 2)