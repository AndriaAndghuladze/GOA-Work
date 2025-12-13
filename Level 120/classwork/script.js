//1
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
const filter_list = l => l.filter(i => typeof i === 'number')


//2
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


//3
//Make a program that filters a list of strings and returns a list with only your friends name in it.
function friend(friends) {
  let arr = [];

  for (let name of friends) {
    if (name.length === 4) {
      arr.push(name);
    }
  }

  return arr;
}