/**
* Authors: Johnny Choi <cchoi14@ucsc.edu>
*      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   18 Feb. 2021
 * License:   Public Domain
 **/

// find element
var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');

// create button
var myButton = "<button>Click Me</button>";

// add buttons to the page
challengesEl.append(myButton);
problemsEl.append(myButton);
resultsEl.append(myButton);

// make the button to toggle the special class
$('#challenges button').click(function() {
  $('#challenges').toggleClass('special');
})

$('#problems button').click(function() {
  $('#problems').toggleClass('special');
})

$('#results button').click(function() {
  $('#results').toggleClass('special');
})

// bonus
var button1 = '<button>Swap Color</button>';
var button2 = '<button>Color Swap</button>';
var bonus1 = $('#bonus1');
var bonus2 = $('#bonus2');

bonus1.append(button1);
bonus2.append(button2);

$('#bonus1 button').click(function() {
  $('#bonus1 button').css('background-color', 'white');
  $('#bonus2 button').css('background-color', '#5da1b0');
})

$('#bonus2 button').click(function() {
  $('#bonus2 button').css('background-color', 'white');
  $('#bonus1 button').css('background-color', '#5da1b0');
})
