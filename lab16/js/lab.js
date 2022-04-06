/*
 * Author: Sugi and Jeremy
 * Created: 15th March
 * License: Public Domain
 */
resultsEl = document.getElementById("results");

function Vehicle (make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    var str = "It's a " + this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + ".";
    return str;
  }
}

var cars = []

cars.push (new Vehicle("Honda", "Accord", " 2001", "Silver", "nothing special"));
cars.push (new Vehicle("Toyota", "Prius", "2010", "Gold", "a sunroof"));
cars.push (new Vehicle("Acura", "TL", "2005", "Grey", "a sunroof and sports trim"));


for(var i =0; i<cars.length; i++){
  $("#results").append("<p>" + cars[i].info() + "</p>");
}
