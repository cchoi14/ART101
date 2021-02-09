/**
* Authors: Johnny Choi <cchoi14@ucsc.edu>
*      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   9 Feb. 2021
 * License:   Public Domain
 **/
function firstThing (test) {
  document.getElementById("script-output").innerHTML = "firstThing: " + test + "<br>";
}
function secondThing (test) {
  document.getElementById("script-output").innerHTML = "secondThing: " + test + "<br>";
}
function thirdThing (test) {
  document.getElementById("script-output").innerHTML = "thirdThing: " + test + "<br>";
}

// Test 1
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// Test 2
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

// Test 3
setTimeout(function() {
  firstThing("TEST 3");
}, 2000);
setTimeout(function() {
  secondThing("TEST 3");
}, 0);
setTimeout(function() {
  thirdThing("TEST 3");
}, 1000);
