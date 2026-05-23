//1
//Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x) {
  return x.replaceAll(' ', '');
}

//2
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
   let res = []
   let x = 0
   
   for(let i of arr){
     if (i == 0){
       x++
     }else{
       res.push(i)
     }
   }
  
  while(x--){
    res.push(0)
  }

  
  return res
   
}


//3
//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
function rgb(r, g, b) {
    return [r, g, b].map(x => Math.max(0, Math.min(255, x)).toString(16).padStart(2, "0").toUpperCase()).join("")
  
}

//4
//Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.
function firstNonRepeatingLetter(s) {
  
  for(let a of s){
    if(s.toLowerCase().split(a.toLowerCase()).length === 2) {
      return a
    }
  }
  return '';
  
}