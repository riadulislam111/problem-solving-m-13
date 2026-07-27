// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number


function averageOfArray(numbers){
    let total = 0;

    for(let num of numbers){
        total += num;
    }

    total = total / numbers.length;
    return total;
}

console.log(averageOfArray([2, 4, 6]));















// 1nd 
// function averageOfArray(numbers){
// let total = 0;
// let sum = 0;

// for(let num of numbers){
    
//     sum += num;


// }
// total = sum / numbers.length;

//     return total;
// }

// console.log(averageOfArray([2, 4, 6]));