//1
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(n){
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
  
}


//2
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
  let res = [];
  let c = 0;

  for (let item of arr) {
    if (item === 0) {
      c++;
    } else {
      res.push(item);
    }
  }

  // მთელი ნულების დამატება ერთხელ, ბოლოს
  while (c--) {
    res.push(0);
  }

  return res;
}