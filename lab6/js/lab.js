/*
 * Author: Sugi and Jeremy
 * Created: 16th February
 * License: Public Domain
 */

 //Define Variables
 myTransport = ["legs", " bike", " heelies", " car"];

 myMainRide = {
   make: "Honda",
   model: "Accord",
   color: "silver",
   year: 2001,
   age: function () {
     return 2022 - this.year;
   }
 }

 //output
 document.writeln("My main transportation: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>"+
      JSON.stringify(myMainRide, null, "\t"), "</pre>");
