/**
 * Authors: Johnny Choi <cchoi14@ucsc.edu>
 *      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   25 Feb. 2021
 * License:   Public Domain
 **/

// FizzBuzz function
// Loop through numbers 1 to 200, listing them as you go
function FizzBuzz() {
  // small string is used to contain every 'line'
  var str = "";
  // one big string contains the whole thing to be printed via DOM
  var strBig = "";
  var count = $("#count").val();
  var f1 = $("#factor1").val();
  var f2 = $("#factor2").val();
  var f3 = $("#factor3").val();
  var f4 = $("#factor4").val();
  var t1 = $("#text1").val();
  var t2 = $("#text2").val();
  var t3 = $("#text3").val();
  var t4 = $("#text4").val();

  for (var i = 1; i <= count; i++) {
    // for every multiple of f1, add t1 to string
    if ((i % f1) == 0) {
      str += t1;
    }
    
    // for every multiple of f1, add t1 to string
    if ((i % f2) == 0) {
      str += t2;
    }

    // for every multiple of 7, add "Boom" to string
    if ((i % f3) == 0) {
      str += t3;
    }

    if ((i % f4) == 0) {
      str += t4;
    }

    // if none of the above applies, add number
    if (str == "") {
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

$("#button").click(function() {
  FizzBuzz();
})
