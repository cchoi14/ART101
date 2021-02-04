/**
 * Authors:   Johnny Choi <cchoi14@ucsc.edu>
 *            Helia Fotoohi <hfotoohi@ucsc.edu>
 * Created:   4 Feb. 2021
 * License:   Public Domain
 **/
function sortUserName (userName) {
   // takes input, capitalizes it, and taunts the user
   userName = userName.toUpperCase();
   document.writeln("So, your name is ", userName, "? ");
   // gets rid of whitespaces, sorts the string by converting to array then back, and returns it
   return userName.replace(/\s+/g, '').split('').sort().join('');
}
// prompt user for input
var userName = prompt("Hey, tell me your name. I'll fix it for you!");

// output
document.writeln("I don't think so!<br><br>Here, I fixed your name! Your Name: ", sortUserName(userName));
