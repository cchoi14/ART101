/**
* Authors: Johnny Choi <cchoi14@ucsc.edu>
*      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   23 Feb. 2021
 * License:   Public Domain
 **/

// sortingHat function that gives you your house
function sortingHat(str) {
  var len = str.length;
  var mod = len % 4;
  if (mod == 0) {
    return "Griffyndor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

// find element
$('#button').click(function() {
  var name = document.getElementById('input-text').value;
  console.log(name);
  var house = sortingHat(name);
  var outputText = "<p>" + name + "! The Sorting Hat has declared you to be a " + house + "!<p>";
  $('#output').append(outputText);
})
