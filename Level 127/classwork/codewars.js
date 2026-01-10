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
//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
function addBinary(a,b) {
   return Number(a + b).toString(2);
}