/**
 * Authors: Johnny Choi <cchoi14@ucsc.edu>
 *      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   23 Feb. 2021
 * License:   Public Domain
 **/

// house descriptions for Bonus #1, information taken from the Harry Potter fanwiki
var houseDescriptions = [
  "Gryffindor was founded by Godric Gryffindor and values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colours are scarlet and gold",
  "Ravenclaw was founded by Rowena Ravenclaw and values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colours are blue and bronze",
  "Slytherin was founded by Salazar Slytherin and values ambition, leadership, self-preservation, cunning and resourcefulness. Its emblematic animal is the serpent, and its colours are emerald green and silver",
  "Hufflepuff was founded by Helga Hufflepuff and values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger,and yellow and black are its colours"
];
// house array for Bonus #2
var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

// Bonus #2 - refactored sortingHat, now it just returns an index to be used in the anonymous function
function sortingHat(str) {
  // Bonus #3 futureproofing against more houses
  return (str.length % houses.length);
}

// button with anon function
$('#button').click(function() {
  var name = document.getElementById('input-text').value;
  var index = sortingHat(name); // sortingHat now returns an int (array index)
  // using .html() so that each press of the button overwrites the previous text
  $('#output p').html(name + "! The Sorting Hat has declared you to be a " + houses[index] + "!");
  $('#house-desc p').html(houseDescriptions[index] + " (information courtesy of the Harry Potter fanwiki).");
})
