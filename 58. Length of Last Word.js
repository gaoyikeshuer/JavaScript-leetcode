/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var mod = s.trim().split(" ")
   var lastWord = mod[mod.length-1]
   return lastWord.length
};
