//1
//Write a function which takes a list of strings and returns each line prepended by the correct number.
var number = function(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push((i + 1) + ': ' + arr[i]);
  }

  return res;
};


//2
//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
function capitalize(s){
  const S = s.toUpperCase()
  let a = ""
  let b = ""
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      a += s[i]
      b += S[i]
    } else {
      a += S[i]
      b += s[i]
    }
  }
  return [a, b]
};


//3
//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);


//4
//  Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
function divisors(integer) {
    var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};



//5
//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
function checkExam(array1, array2) {
 var score = 0;
   for (var i = 0; i < array2.length; i++){
       if (array2[i] === ""){
          score += 0
       } else if (array1[i] === array2[i]){
           score += 4
       } else if (array1[i] !== array2[i]){
          score -= 1
       }
   } 
     if (score >= 0){
       return score;
     } else {
       return 0
     }
}


//6
//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
function validParentheses(parens) {
  let balance = 0;

  for (let char of parens) {
    if (char === '(') balance++;
    if (char === ')') balance--;

    if (balance < 0) return false; 
  }

  return balance === 0;
}


//7
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
const filter_list = l => l.filter(i => typeof i === 'number')