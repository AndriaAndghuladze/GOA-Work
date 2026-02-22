//1
//Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
function divisors(integer) {
  const res = []
  
  for(let i = 1; i <= integer; i++){
    if(integer % i === 0){
      res.push(i)
    }
  }
  return res
}


//2
//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or u
function solve(s){
    let upp = 0
    let low = 0
    
    for(let char of s){
      if(char === char.toLowerCase()){
        low++
      }else{
        upp++
      }
    }
  if(upp > low){
    return s.toUpperCase()
  }else{
    return s.toLowerCase()
  }
  
}


//3
//Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}