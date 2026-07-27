// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array


function keepEvenNumbers(numbers){
    let result = [];
// TODO: loop and push only even number
for(let num of numbers){
    if(num % 2 === 0){
        result.push(num)
    }
}
return result;
}

console.log(keepEvenNumbers([3, -5, 8, -1, 0]));
