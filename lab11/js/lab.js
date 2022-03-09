/*
 * Author: Sugi and Jeremy
 * Created: 9th March
 * License: Public Domain
 */

//Create a button and attatch it to the output div.
$("#output").append("<button id=my-button>DO NOT CLICK.")

//Make the button trigger an allert.
$("#my-button").click(function(){
  alert("I TOLD YOU NOT TO CLICK ON THE BUTTON, IDIOT. FIGURES WE GET AN ILLITERATE VISITOR...SAY, IF YOU CAN'T READ...HOW'D YOU GET HERE?... WHY AM I EVEN ASKING YOU? CLEARLY YOU CAN'T READ MY QUESTION!...IF ANYONE ELSE LOOKS OVER THIS PERSON'S SHOULDER, KNOW THAT THEY CANNOT READ AND COULD USE VERBAL INSTRUCTION! MAKE VERY CLEAR THE DISDAIN I HOLD FOR THEM GIVEN THEIR CHOICE OF PRESSING THE BUTTON I KINDLY ASKED THEM NOT TO PRESS!...WAIT. IS IT POSSIBLE THAT YOU DON'T SPEAK ENGLISH? HABLAS ESPAÑOL? SI COMPRENDES LO QUE ESTAS LEYENDO DEBERIAS SABER QUE EMPUJASTE UN BOTÓN QUE NO DEBERIAS HABER EMPUJADO.")
});
3
//Change the appearance of the button. Make it a pleasent green etc.
$("#my-button").css("background-color", "green");
$("#my-button").css("color", "#39FF14");
$("#my-button").css("text-align", "center");
$("#my-button").css("padding", "10px", "blue");
$("#my-button").css("width", "300px");
$("#my-button").css("border", "double");
$("#my-button").css("font-size", "30px");
$("#my-button").css("font-family", "Zen Kurenaido");



//This is here for reference.

//  font-family: monospace;
  //display: inline-block;
    //   background-color: #73a657;
      // border-radius: 10px;
       //border: 6px double #FFFFFF;
       //color: #eeeeee;
       //text-align: center;
       //font-size: 28px;
       //padding: 20px;
       //width: 300px;
       //code modified from w3 schools
