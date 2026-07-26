// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;

  for (let i = 0; i < str.length; i++) {
       total *= str[i];



  }
  return total;
            
}

console.log(productOfDigits(123));
console.log(productOfDigits(4040));
