/*
Given a non-empty string, return the most frequently ocurring character.

If there are multiple characters with same occurrance, return an array of them.

count('abbccc')
// 'c'

count('abbcccddd')
// ['c', 'd']
*/

function count(str) {
  // your code here
  const map = new Map();
  for(let char of str){
    map.set(char, (map.get(char)||0)+1)
  }
  // console.log(...map.values())//otherwise is a iterator object
  const max = Math.max(...map.values())
  const result = [...map].filter(([key,val]) => val == max)
console.log(result)
var finalRes = null
result.length>1 ? finalRes = result.map(([key,val]) => (key) ) : finalRes =  result.map(([key,val]) => (key) )[0]
console.log(finalRes)
  return finalRes
}
count('abbbccc')
