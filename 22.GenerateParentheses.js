var generateParenthesis = function(n) {
let result = [];

function backTrack( openN, closeN, currentString ) {
    if( openN === closeN && openN === n ) {
        result.push(currentString)
        return
    }
    
    if( openN < n ){
 backTrack(openN+1, closeN, currentString+ "(");

    }  
    if( closeN < openN ){

 backTrack(openN, closeN+1, currentString+ ")");

    }
       }

backTrack( 0, 0, "" );
return result; 

};
