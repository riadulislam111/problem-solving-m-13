// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}

console.log(findShortestWord("JavaScript is a fun language"));
