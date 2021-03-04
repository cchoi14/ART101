/**
 * Authors: Johnny Choi <cchoi14@ucsc.edu>
 *      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   4 March 2021
 * License:   Public Domain
 **/

// make button & anonymous function
$('#activate').click(function() {
  // get values from the drop-down menu
  var TYPE = $('#selector').val();

  // call AJAX
  $.ajax({
      // using PokeAPI's type API endpoint
      url: "https://pokeapi.co/api/v2/type/" + TYPE + "/",
      data: {},
      type: "GET",
      dataType: "json",
    })

    // If request succeeds (it should all the time, since inputs are limited by the drop-down)
    .done(function(data) {
      // build container string to eventually print to page via DOM
      var str = "<p>Your " + TYPE.toUpperCase() + "-type Pok&eacute;mon ...";

      // parse double_damage_from data (given in the form of an array) and add to container string
      var doubleFrom = data.damage_relations.double_damage_from;
      var doubleFromStr = "";
      for (var i in doubleFrom) {
        doubleFromStr = doubleFromStr + doubleFrom[i].name.toUpperCase() + " ";
      }
      str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;takes double damage from " + doubleFromStr.trim() + "-type moves.";

      // parse half_damage_from data (given in the form of an array) and add to container string
      var halfFrom = data.damage_relations.half_damage_from;
      var halfFromStr = "";
      for (var i in halfFrom) {
        halfFromStr = halfFromStr + halfFrom[i].name.toUpperCase() + " ";
      }
      str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;takes half damage from " + halfFromStr.trim() + "-type moves.";

      // parse no_damage_from data (given in the form of an array) and add to container string
      // given the way Pokemon works, this might be empty, but the other two will never be empty
      var noneFrom = data.damage_relations.no_damage_from;
      if (noneFrom != "") {
        var noneFromStr = "";
        for (var i in noneFrom) {
          noneFromStr = noneFromStr + noneFrom[i].name.toUpperCase() + " ";
        }
        str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;takes zero damage from " + noneFromStr.trim() + "-type moves.";
      }

      // prints string to DOM
      $('#output').html(str + '</p>');
    })
    // If the request fails
    .fail(function(xhr, status, errorThrown) {
      $('#output').html('<p>I could not find anything with that name!');
    });
})
