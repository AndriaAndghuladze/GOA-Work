//1
//Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

function anagrams(word, words) {

  
  const sortedTarget = word.split('').sort().join('');
  
  
  return words.filter(w => w.split('').sort().join('') === sortedTarget);
}

//2
//Given an array of integers, find the one that appears an odd number of times.

function findOdd(A) {
  for (let i of A){
    let c = A.filter(x => x === i).length
    
    if(c %2 !== 0){
      return i
    }
  }
}

//3
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  word = word.toLowerCase();

  let result = '';

  for (let char of word) {
    let count = 0;

    for (let c of word) {
      if (c === char) {
        count++;
      }
    }

    if (count > 1) {
      result += ')'
    } else {
      result += '('
    }
  }

  return result;
}


//4
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(n){
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}