/*
 * Author: Sugi and Jeremy
 * Created: 15th March
 * License: Public Domain
 */

//Create a function.


function sortingHat(str){
  //count the letters in str and assign them to variable len
  var len = str.length;
  //use modulus (% operator) to get the remainder with 4
  var remainder = len % 4;
  //check remainder and assign house depending on value
  if (remainder == 0){
     houseStr = "Gryfindor";
   }else if (remainder == 1){
     houseStr = "Slytherin";
   }else if (remainder == 2){
     houseStr = "Ravenclaw";
   }else
     houseStr = "Hufflepuff";
}

var mybutton = document.getElementById("button");
button.addEventListener("click", function(){
  //get the value from the input field
  var name = document.getElementById("input").value;
  // use the name to get house from SortingHat function
  var houseObj = sortingHat(name);
  //output to the output div
  newText = "The Sorting Hat has sorted you into " + houseStr;
  document.getElementById("output").innerHTML = newText;
})
