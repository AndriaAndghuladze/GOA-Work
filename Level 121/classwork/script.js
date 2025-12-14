//1
//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
  if(n % x ===0  & n % y === 0) {
    return true
  }else {
    return false
  }
}


//2
//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
var capitals = function (word) {
  let res = [];
  
  for(let i = 0; i < word.length; i++){
    if (word[i] === word[i].toUpperCase()){
      res.push(i);
    }
  }
  return res
};

//3
//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

function checkExam(array1, array2) {
var score = 0;
  
  for (var i = 0; i < array1.length; i++){
    if (array1[i] == array2[i]) {
    score += 4;

    }
	  else if (array2[i] === ""){
		  score += 0
  	}      
   else {   
    score -= 1
  
   }if (score < 0) {
       score = 0
     }  
  return score
 
}}

