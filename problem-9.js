// Input: an array of numbers
// Output: the second smallest number
// Return: a number


function findSecondSmallest(number){
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let num of number){
        if(num < smallest){
            secondSmallest = smallest;
            smallest = num;
        }else if (num < secondSmallest && num !== smallest){
            secondSmallest = num;
        }
    }
    return secondSmallest === Infinity? null: secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15]));

