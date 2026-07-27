// Input: an object
// Output: array of the object's keys
// Returns: an array


function listKeys(obj){
    let keys = [];

    for(let key in obj){
        keys += Object.keys;
    }
    return keys;
}

console.log(listKeys({name:"Sam", age: 25, city: "Dhaka"}));