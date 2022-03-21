/*
 * Author: Sugi and Jeremy
 * Created: 15th March
 * License: Public Domain
 */


var outputEl = document.getElementById("output");
//Create a function.
function divChecker(){
  var buildStr = '';

  for (var i = 1; i < 201; i++){


    if (i % 3 == 0){
      buildStr += "Fizz!";
    }
    if (i % 5 == 0){
      buildStr += "Buzz!";
    }
    if (i % 7 == 0){
      buildStr += "Boom!";
    }

    if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0 ){
      buildStr += i;
    }

    buildStr += "</br>";
  //  outputEl.innerHTML = buildStr + "</br>"

  }

$("#output").html(buildStr);


}

  document.writeln(divChecker());
