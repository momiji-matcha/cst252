/*
 * Author: Sugi and Jeremy
 * Created: 15th March
 * License: Public Domain
 */


//define a URL
var url="https://numbersapi.com/random/trivia";

//make the button fetch AJAX
$("#activate").click(getAjax);

//create AJAX function
function getAjax () {
  $.ajax({
    url: url,
    type: "GET",
  })

//if the request succeeds
  .done(function(data) {
    console.log(data);
    $("#output").prepend("<p>" + data);
  })

//if the request fails
  .fail(function (xhr, status, errorThrown){
    console.log(errorThrown + " Staus:" + status);
})
}
