//1
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


//2
//Return the number (count) of vowels in the given string.
function getCount(str) {
   let vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsCount = 0;
  
  
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }
  
  return vowelsCount;
}


//3
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}