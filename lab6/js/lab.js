/*
 * Authors: Johnny Choi <cchoi14@ucsc.edu>
 *      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created: 2 Feb. 2021
 * License: Public Domain
 */

var myTransport = ["Santa Cruz Metro Bus", "Seoul Subway", "Car", "Legs?"]

var myMainRide = {
    make: "Hyundai",
    model: "Elantra",
    color: "Red",
    year: 1994,
    age: function() {
      return 2021 - year;
    }
}

var i = 0;
document.writeln("This is how we get around: ");
for (i = 0; i < myTransport.length - 1; i++) {
  document.writeln(myTransport[i] + ", ")
}
document.writeln(myTransport[i] + "<br><br>");

document.writeln("My Main Ride: ", JSON.stringify(myMainRide, null, "<br>"));
