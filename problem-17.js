// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
 
function reverseWords(sentence) {
  // TODO: split into words, reverse the order, and join back together
 let splitWord = sentence.split(" ");
 let reversedWord = splitWord.reverse();
 let joinedWord = reversedWord.join(" ");
 
 
 
 return joinedWord;
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"
