//2
//In this kata, you are asked to square every digit of a number and concatenate them.


//3
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  let word = str.split(' ')
  let res = []
  
  for (word of word){
    res.push(word.split('').reverse().join(''))
  }
  return res.join(' ')
  
  
}


//4
//Count the number of divisors of a positive integer
function getDivisorsCnt(n) {
  let counter = 0;

  if (n % Math.sqrt(n) == 0) {
    counter++;
  }

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      counter += 2;
    }
  }

  return counter;
}