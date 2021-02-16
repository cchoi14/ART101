/**
* Authors: Johnny Choi <cchoi14@ucsc.edu>
*      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   16 Feb. 2021
 * License:   Public Domain
 **/

// find the element
var sortButton = document.getElementById("sort-button");
var anagramButton = document.getElementById("anagram-button");

// add eventListener
sortButton.addEventListener("click", function(){
  // find elements
  var output = document.getElementById("output");
  var name = document.getElementById("user-name");
  var userName = name.value;

  // sort name
  var sortedName = userName.toUpperCase().replace(/\s+/g, '').split('').sort().join('');

  // writes output to page
  var newEl = document.createElement("p");
  newEl.innerHTML = "sort(): " + sortedName;
  output.append(newEl);
});
anagramButton.addEventListener("click", function(){
  // find elements
  var output = document.getElementById("output");
  var name = document.getElementById("user-name");
  var userName = name.value;

  // sort name
  var anagramName = userName.toUpperCase().replace(/\s+/g, '').split('').sort().reverse().join('');

  // writes output to page
  var newEl = document.createElement("p");
  newEl.innerHTML = "anagram(): " + anagramName;
  output.append(newEl);
});
