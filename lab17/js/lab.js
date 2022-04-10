/*
 * Author: Sugi and Jeremy
 * Created: 15th March
 * License: Public Domain
 */
resultsEl = document.getElementById("results");

class Vehicle {
  constructor (make, model, year, color, extras) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
  }
  info() {
    return "It's a " + this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + ".";
  }
}

var cars = []

var jCar = new Vehicle("Honda", "Accord", "2001", "Silver", "nothing special");
var sCar = new Vehicle("Toyota", "Prius", "2010", "Gold", "a sunroof");
var ssCar = new Vehicle("Acura", "TL", "2005", "Grey", "a sunroof and sports trim");

cars.push(jCar);
cars.push(sCar);
cars.push(ssCar);


for(var i =0; i<cars.length; i++){
  $("#results").append("<p>" + cars[i].info() + "</p>");
}
