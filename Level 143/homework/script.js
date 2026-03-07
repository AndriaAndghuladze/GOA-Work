//1
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}

//2
//Create a function with two arguments that will return an array of the first n multiples of x.
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

//3
//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//4
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciat
function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}

//5
//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  
  return i * 2
}