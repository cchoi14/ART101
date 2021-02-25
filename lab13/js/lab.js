/**
 * Authors: Johnny Choi <cchoi14@ucsc.edu>
 *      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   25 Feb. 2021
 * License:   Public Domain
 **/

// FizzBuzz function
// Loop through numbers 1 to 200, listing them as you go
function FizzBuzz() {
  // declare one small string to contain every line of the loop
  // and one big string to be added via DOM
  var str = "";
  var strBig = "";

  for (var i = 1; i <= 200; i++) {
    // for every multiple of 3, add "Fizz" to string
    if ((i % 3) == 0) {
      str += "Fizz";
    }

    // for every multiple of 5, add "Buzz" to string
    if ((i % 5) == 0) {
      str += "Buzz";
    }

    // for every multiple of 7, add "Boom" to string
    if ((i % 7) == 0) {
      str += "Boom";
    }

    // if none of the above applies, add number
    if ( str == "" ) {
      str += i;
    }

    // add line break
    str += "<br>";

    // add everything to big string and empty little string
    strBig = strBig + str;
    str = "";
  }

  // change the contents of output div with DOM
  $("#output p").html(strBig);
}
// calls FizzBuzz
FizzBuzz();
