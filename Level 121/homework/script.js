//1
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url){
  return url.split('#')[0];
}


//2
//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
function DNAStrand(dna){
  var result= "";
		  for(var i =0; i<dna.length; i++) 
		  {
        if (dna[i]==="A") 
       {
        result +="T";
       }
        else if (dna[i]==="T") 
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
		 }
     return result;
	}


//3
//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}


//4
//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
function smallEnough(a, limit){
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}


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
