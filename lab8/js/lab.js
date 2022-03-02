/*
 * Author: Sugi and Jeremy
 * Created: 26th February
 * License: Public Domain
 */

 //Our array.
var ourArray = [3, 7, 34, 25, 71];
console.log("Our array", ourArray);

//Our named function.
function multiplyByTwo (x){
  return (x*2);
}

var result = ourArray.map (function(x){
  return (x*2)
})

//Test function.
console.log("What is 3 times 2? 3 times 2 is", multiplyByTwo(3));
console.log("What is 71 times 2? 71 times 2 is", multiplyByTwo(71));

//Our array paired with our function.
ourArray.map(multiplyByTwo);
console.log("Multiply each nubmer by 2:" + result);

//Our array paired with an annonymous function.
var result1 = ourArray.map(function(x){
  return (x/3);
})
console.log("Divide each nuber by 3:" + result1);
