// Input: a string
// Output: the string without its first and last character
// Returns: a string


function removeFirstAndLast(str){

    let removed = str.slice(1, -1);
    return removed;
}

console.log(removeFirstAndLast("hello"));