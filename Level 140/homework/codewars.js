//1
//Given the triangle of consecutive odd numbers:


//2
//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);


//3
//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
function distinct(a) {
  return [...new Set(a)];
}


//4
//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}


//5
//Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}