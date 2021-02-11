/**
* Authors: Johnny Choi <cchoi14@ucsc.edu>
*      and Simon Wang <swang246@ucsc.edu>
 * Created:   11 Feb. 2021
 * License:   Public Domain
 **/

 // declaring variables
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

// writing stuff
new1El.innerHTML = "Why Hello There.";
new2El.innerHTML = "This comes first.";

// adding the stuff to the page
outputEl.append(new1El);

// the second element prints first
outputEl.prepend(new2El);

// editing the css style of some elements
document.getElementById("backtohome").style.fontFamily = "monospace";
document.getElementById("backtohome").style.fontSize = "14px";

// some more DOM stuff
var bonusEl = document.createElement("p");
bonusEl.innerHTML = "this page is located at " + document.URL;
outputEl.append(bonusEl);
