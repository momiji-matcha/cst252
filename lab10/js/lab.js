/*
 * Author: Sugi and Jeremy
 * Created: 26th February
 * License: Public Domain
 */
 document.getElementById("mybutton");
 var outputEl = document.getElementById("output");


 mybutton.addEventListener("click", function(){
   //Get the value of your input field.
   var inputEl = document.getElementById("username").value;
   var nameArray = inputEl.split('');
   var nameArraySort = nameArray.sort(); //Why doesn't this one need the ''???? Why do the other ones need it?
   var nameArraySorted = nameArraySort.join('')

     //Replaces the html in <div id=output> with the results.
      outputEl.innerHTML = nameArraySorted;
 })



 //Runs that value through your sort() function and saves the results.
//function sortUserName() {
   // split string to array
//   var nameArray = inputEl.split('');
   // sort the array
//   var nameArraySort = nameArray.sort();
   // join array back to a string
//   var nameSorted = nameArraySort.join('')
