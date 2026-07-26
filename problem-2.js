//Input: a number
//Output: the number with digits reversed
//Returns: a number


function reverseNumber(num){
    let str = num.toString();

    let splitStr = str.split("");
    let reversed = splitStr.reverse();
    let joined = reversed.join("")

    return joined;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(7));