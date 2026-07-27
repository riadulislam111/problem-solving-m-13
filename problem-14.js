// Input: an object , a key (string), a default value
// Output: the value at that key, or the default
// Returns; any value



function getValueOrDefault(obj, key, defaultValue){

if(obj.hasOwnProperty(key)){
    return obj[key];
}else{
    return defaultValue;
}



}

let person = {name: "Sam", age: 25};
console.log(getValueOrDefault(person, "age", 0));
console.log(getValueOrDefault(person, 'grade', 'N/A'));