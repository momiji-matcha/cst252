/*
 * Author: Sugi and Jeremy
 * Created: 26th February
 * License: Public Domain
 */

var outputEl = document.getElementById("content");

var oneEl = document.createElement("button");
var twoEl =  document.createElement("button");


//append the oneEl to outputEl
outputEl.appendChild(oneEl);

//give the new element a unnique id
oneEl.id = "button one";

//Change the button text to something
oneEl.innerHTML = "SOMETHING";

//Change the button color
oneEl.style.backgroundColor = "green";

//Change other CSS atributes with JavaScript
oneEl.style.color = "white";
oneEl.style.fontFamily = "monospace";
oneEl.style.fontSize = "50px";
oneEl.style.border = "300px, black, solid";
oneEl.onclick = function () {
  alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt lobortis feugiat vivamus at. Semper feugiat nibh sed pulvinar. In tellus integer feugiat scelerisque varius. Nisi vitae suscipit tellus mauris a diam maecenas. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Rhoncus aenean vel elit scelerisque. Consectetur a erat nam at lectus. Et ultrices neque ornare aenean euismod. Tortor vitae purus faucibus ornare suspendisse. Quis commodo odio aenean sed adipiscing.");
};

//extra credit
//outputEl.insertBefore(newNode, appendChild(twoEl));   DOES NOT WORK
outputEl.prepend(twoEl);

//Change the button text to OH HAI
twoEl.innerHTML = "OH HAI IT MEME";
twoEl.style.backgroundColor = "black";
twoEl.style.color = "purple";
twoEl.style.fontFamily = "fantasy";
twoEl.style.fontSize = "90px";
twoEl.style.border = "300px, black, solid";
twoEl.onclick = "myFunction()";

function myFunction() {
  document.getElementbyId("image").innerHTML = ("I wanted an image to appear here.");
}
