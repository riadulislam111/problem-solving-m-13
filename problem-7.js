// Input: a string
// Output: true or false
// Returns: a boolean



function isPalindrome(str){
    
// return str == str.split("").reverse().join("");
let letter = str.split('');
let reversed = letter.reverse();
let joined = reversed.join('');
 if(str === joined){
    return true;
 }
 else{
    return false
 }


}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));