//1
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  const lower = str.toLowerCase()
  const unique = new Set(lower)
  return unique.size === lower.length
}

//2
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(elem, i, arr){
         return elem !== arr[i - 1]
 })
  return s4.join("")
}

//3
//Count the number of divisors of a positive integer n.
function getDivisorsCnt(n){
    let count = 0
     
    if( n % Math.sqrt(n)== 0 ) {
        count++
       }
  
  for( let i = 1; i < Math.sqrt(n); i++ ){
    if (n % i == 0){
      count += 2
    }
    
  }
  return count
}

//4
//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
function dnaStrand(dna){
   var result= "";
		  for(var i =0; i<dna.length; i++) 
		  {
        if(dna[i] === 'A'){
          result += "T"
        }else if(dna[i]=== 'T'){
          result += 'A'
        }else if(dna[i] === 'C'){
          result += "G"
        }else if(dna[i] === 'G'){
          result += 'C'
        }else {
          result += dna[i]
        }
      }
  return result
}

//5
//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};